#!/usr/bin/env node
// p5t-upload.mjs — upload sketch folders to the p5.js web editor (option C2)
//
// Login happens in a real Chrome window (any sign-in method: email, GitHub, Google).
// The session lives in a dedicated Chrome profile (tools-js/.p5profile, gitignored).
// Uploads run fetch() inside a logged-in editor page, so the session cookie is used
// without ever being copied out.
//
// Usage:
//   node tools-js/p5t-upload.mjs login
//   node tools-js/p5t-upload.mjs whoami
//   node tools-js/p5t-upload.mjs upload <folder> [<folder> ...] [--dry-run] [--headed] [--force]
//
// Folders are sketch folders (containing index.html), e.g. p5js/Rose.
// Results are recorded in p5js/p5editor-map.json; a folder already in the map
// is updated in place (PUT) instead of creating a duplicate sketch.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const EDITOR = 'https://editor.p5js.org';
const EXPECTED_USER = 'jht9629-nyu';
const PAUSE_MS = 2000; // between sketches, to be gentle on the server

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(toolsDir, '..');
const sketchRoot = path.join(repoRoot, 'p5js');
const profileDir = path.join(toolsDir, '.p5profile');
const mapPath = path.join(sketchRoot, 'p5editor-map.json');

const SOURCE_EXT = ['.html', '.js', '.css'];

// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const positional = args.filter((a) => !a.startsWith('--'));
const cmd = positional.shift();

async function main() {
  if (cmd === 'login') return cmdLogin();
  if (cmd === 'whoami') return cmdWhoami();
  if (cmd === 'upload') return cmdUpload(positional);
  console.log(`usage:
  node tools-js/p5t-upload.mjs login
  node tools-js/p5t-upload.mjs whoami
  node tools-js/p5t-upload.mjs upload <folder>... [--dry-run] [--headed] [--force]`);
  process.exit(cmd ? 1 : 0);
}

// ---------------------------------------------------------------------------
// browser / session

async function openEditor({ headed }) {
  const context = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',
    headless: !headed,
    viewport: null,
  });
  const page = context.pages()[0] || (await context.newPage());
  return { context, page };
}

async function sessionUser(page) {
  return page.evaluate(async () => {
    const res = await fetch('/editor/session', { headers: { Accept: 'application/json' } });
    if (!res.ok) return null;
    const json = await res.json().catch(() => null);
    return json && json.username ? json.username : null;
  });
}

async function cmdLogin() {
  const { context, page } = await openEditor({ headed: true });
  await page.goto(`${EDITOR}/login`);
  console.log('Sign in to the p5.js editor in the Chrome window (any method).');
  console.log('Waiting up to 5 minutes...');
  console.log('Leave the window open — it closes by itself once you are signed in.');
  let closed = false;
  context.on('close', () => (closed = true));
  const deadline = Date.now() + 5 * 60 * 1000;
  let user = null;
  while (!closed && Date.now() < deadline) {
    // check via the context's cookie jar, independent of which tab/page is showing
    user = await context.request
      .get(`${EDITOR}/editor/session`, { headers: { Accept: 'application/json' } })
      .then(async (r) => (r.ok() ? (await r.json().catch(() => ({}))).username || null : null))
      .catch(() => null);
    if (user) break;
    await new Promise((r) => setTimeout(r, 2000));
  }
  if (!closed) await context.close();
  if (!user) {
    console.log(closed ? 'Browser window was closed before sign-in finished. Run login again.' : 'Timed out. Run login again.');
    process.exit(1);
  }
  console.log('Signed in as', user);
  if (user !== EXPECTED_USER) console.log(`WARNING: expected ${EXPECTED_USER}`);
}

async function cmdWhoami() {
  const { context, page } = await openEditor({ headed: flags.has('--headed') });
  await page.goto(EDITOR);
  const user = await sessionUser(page);
  await context.close();
  console.log(user || '(not signed in)');
}

// ---------------------------------------------------------------------------
// local sketch folder -> file list

function objectId() {
  const ts = Math.floor(Date.now() / 1000).toString(16).padStart(8, '0');
  return ts + crypto.randomBytes(8).toString('hex');
}

function readSketch(folder) {
  const abs = path.resolve(repoRoot, folder);
  if (!fs.existsSync(path.join(abs, 'index.html'))) {
    throw new Error(`no index.html in ${folder}`);
  }
  const files = [];
  const skipped = [];
  for (const ent of fs.readdirSync(abs, { withFileTypes: true })) {
    if (ent.name.startsWith('.')) continue;
    if (ent.isDirectory()) {
      skipped.push(ent.name + '/');
      continue;
    }
    if (!SOURCE_EXT.includes(path.extname(ent.name).toLowerCase())) {
      skipped.push(ent.name);
      continue;
    }
    files.push({ name: ent.name, content: fs.readFileSync(path.join(abs, ent.name), 'utf8') });
  }
  // references outside the folder will not resolve in the editor
  const outside = [];
  for (const f of files) {
    const m = f.content.match(/(?:src|href)\s*=\s*["']\.\.\/[^"']*["']/g);
    if (m) outside.push(...m.map((s) => `${f.name}: ${s}`));
  }
  return { abs, files, skipped, outside };
}

function sketchName(folder) {
  const rel = path.relative(sketchRoot, path.resolve(repoRoot, folder));
  return rel.split(path.sep).join('/');
}

function newProjectPayload(name, files) {
  const rootId = objectId();
  const items = files.map((f) => {
    const id = objectId();
    return {
      name: f.name,
      content: f.content,
      id,
      _id: id,
      fileType: 'file',
      children: [],
      filePath: '',
      isSelectedFile: f.name === 'sketch.js',
    };
  });
  const root = {
    name: 'root',
    id: rootId,
    _id: rootId,
    fileType: 'folder',
    content: '',
    children: items.map((i) => i.id),
  };
  return { name, updatedAt: '', isSaving: false, files: [root, ...items] };
}

function applyUpdate(project, name, files) {
  const root = project.files.find((f) => f.name === 'root' && f.fileType === 'folder');
  const byName = new Map();
  for (const cid of root.children) {
    const f = project.files.find((x) => x.id === cid || x._id === cid);
    if (f) byName.set(f.name, f);
  }
  let changed = 0;
  for (const local of files) {
    const remote = byName.get(local.name);
    if (remote) {
      if (remote.content !== local.content) {
        remote.content = local.content;
        changed++;
      }
    } else {
      const id = objectId();
      project.files.push({
        name: local.name, content: local.content, id, _id: id,
        fileType: 'file', children: [], filePath: '',
      });
      root.children.push(id);
      changed++;
    }
  }
  if (project.name !== name) {
    project.name = name;
    changed++;
  }
  project.updatedAt = new Date().toISOString();
  return changed;
}

// ---------------------------------------------------------------------------
// upload

function loadMap() {
  return fs.existsSync(mapPath) ? JSON.parse(fs.readFileSync(mapPath, 'utf8')) : {};
}
function saveMap(map) {
  const sorted = Object.fromEntries(Object.entries(map).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(mapPath, JSON.stringify(sorted, null, 2) + '\n');
}

async function apiJson(page, method, url, body) {
  return page.evaluate(
    async ({ method, url, body }) => {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
      });
      const text = await res.text();
      let json = null;
      try { json = JSON.parse(text); } catch {}
      return { status: res.status, json, text: json ? '' : text.slice(0, 300) };
    },
    { method, url, body }
  );
}

async function cmdUpload(folders) {
  if (!folders.length) throw new Error('upload: give one or more sketch folders');
  const dryRun = flags.has('--dry-run');
  const force = flags.has('--force');
  const map = loadMap();

  const jobs = [];
  for (const folder of folders) {
    const key = path.relative(repoRoot, path.resolve(repoRoot, folder)).split(path.sep).join('/');
    const s = readSketch(key);
    const name = sketchName(key);
    const existing = map[key];
    console.log(`${existing ? 'update' : 'create'}  ${key}  -> "${name}"  [${s.files.map((f) => f.name).join(', ')}]`);
    if (s.skipped.length) console.log('   skipping:', s.skipped.join(', '));
    if (s.outside.length) {
      console.log('   references outside folder:\n     ' + s.outside.join('\n     '));
      if (!force) {
        console.log('   -> not uploaded (use --force to upload anyway)');
        continue;
      }
    }
    jobs.push({ key, name, files: s.files, existing });
  }
  if (dryRun || !jobs.length) return;

  const { context, page } = await openEditor({ headed: flags.has('--headed') });
  try {
    await page.goto(EDITOR);
    const user = await sessionUser(page);
    if (!user) throw new Error('not signed in — run: node tools-js/p5t-upload.mjs login');
    if (user !== EXPECTED_USER) throw new Error(`signed in as ${user}, expected ${EXPECTED_USER}`);

    for (const [i, job] of jobs.entries()) {
      if (i) await page.waitForTimeout(PAUSE_MS);
      let id;
      if (job.existing) {
        id = job.existing.id;
        const got = await apiJson(page, 'GET', `/editor/${user}/projects/${id}`);
        if (got.status !== 200) {
          console.log(`FAIL read ${job.key} (${id}): ${got.status} ${got.text}`);
          continue;
        }
        const project = got.json;
        const changed = applyUpdate(project, job.name, job.files);
        if (!changed) {
          console.log(`same  ${job.key}  ${job.existing.url}`);
          continue;
        }
        const put = await apiJson(page, 'PUT', `/editor/projects/${id}`, project);
        if (put.status !== 200) {
          console.log(`FAIL update ${job.key}: ${put.status} ${put.text}`);
          continue;
        }
      } else {
        const post = await apiJson(page, 'POST', '/editor/projects', newProjectPayload(job.name, job.files));
        id = post.json && (post.json.id || post.json._id);
        if (!id) {
          console.log(`FAIL create ${job.key}: ${post.status} ${post.text || JSON.stringify(post.json).slice(0, 300)}`);
          continue;
        }
      }
      const url = `${EDITOR}/${user}/sketches/${id}`;
      map[job.key] = { id, name: job.name, url, updatedAt: new Date().toISOString() };
      saveMap(map); // after each sketch, so a crash loses nothing
      console.log(`ok    ${job.key}  ${url}`);
    }
  } finally {
    await context.close();
  }
}

main().catch((err) => {
  console.error('error:', err.message);
  process.exit(1);
});
