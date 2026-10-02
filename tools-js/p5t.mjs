#!/usr/bin/env node
// Helpers for porting the #p5t Processing sketches to p5.js.
// Node version of tools/p5t.py; it writes the same files, byte for byte.

const USAGE = `\
  node tools-js/p5t.mjs gallery                        # rebuild p5js/sketches.js and play/players.js
  node tools-js/p5t.mjs new-player NAME [--from wall]   # copy a player to p5js/play/NAME/

The players in p5js/play/*/ are plain hand-edited files that read the sketch
list from p5js/sketches.js; p5js/index.html is the launcher.

Other scripts import writeSketch() to lay out a converted sketch as
p5js/<same path as in #p5t>/{index.html, sketch.js}.`;

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const SRC = path.join(ROOT, '#p5t');
export const OUT = path.join(ROOT, 'p5js');
export const PLAY = path.join(OUT, 'play');
export const P5_VERSION = '1.11.12';
export const P5_URL = `https://cdnjs.cloudflare.com/ajax/libs/p5.js/${P5_VERSION}/p5.min.js`;
const UPSTREAM = 'https://github.com/madparker/-p5t/blob/main/';

// Sketches calling these get p5js/lib/p5t.js (Processing-style pixels and colors).
const LIB_USE = new RegExp(
  String.raw`\b(j(get|set|loadPixels|color|colorInt|red|green|blue|hue|saturation|brightness` +
  String.raw`|lerpColor|fill|stroke|background|int)|idiv)\(`
);

// Scratch copies left next to the real sketch; not ported.
const SKIP_FILES = new Set(['BAK.pde', 'Temop.pde']);

const indexHtml = ({ title, p5Url, libs }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="${p5Url}"></script>
${libs}    <script src="sketch.js"></script>
    <style>
      body {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #d0d0d0;
      }
    </style>
  </head>
  <body></body>
</html>
`;

// ---- Python-compatible helpers, so the output matches tools/p5t.py.

const posix = p => p.split(path.sep).join('/');
const rel = (from, p) => posix(path.relative(from, p));
const byCodePoint = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

// html.escape
const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

// html.unescape, for the entities a <title> or description is likely to hold.
const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
const unescapeHtml = s => s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) =>
  e[0] !== '#' ? NAMED[e.toLowerCase()] ?? m
    : String.fromCodePoint(parseInt(e.slice(e[1].toLowerCase() === 'x' ? 2 : 1), e[1].toLowerCase() === 'x' ? 16 : 10)));

// urllib.parse.quote with safe='/'
const quote = s => [...Buffer.from(s, 'utf8')].map(b => {
  const c = String.fromCharCode(b);
  return /[A-Za-z0-9_.\-~/]/.test(c) ? c : '%' + b.toString(16).toUpperCase().padStart(2, '0');
}).join('');

// json.dumps: ", " and ": " separators (or "," with indent), non-ASCII escaped.
function dumps(v, indent = null, depth = 0) {
  const pad = n => (indent === null ? '' : '\n' + ' '.repeat(indent * n));
  const sep = indent === null ? ', ' : ',';
  if (Array.isArray(v)) {
    if (!v.length) return '[]';
    return '[' + v.map(x => pad(depth + 1) + dumps(x, indent, depth + 1)).join(sep) + pad(depth) + ']';
  }
  if (v && typeof v === 'object') {
    const keys = Object.keys(v);
    if (!keys.length) return '{}';
    return '{' + keys.map(k => pad(depth + 1) + dumps(k) + ': ' + dumps(v[k], indent, depth + 1))
      .join(sep) + pad(depth) + '}';
  }
  if (typeof v === 'string') {
    return JSON.stringify(v).replace(/[\u007f-￿]/g,
      c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  }
  return JSON.stringify(v);
}

// ---- Tools

/** Folders under #p5t (relative, posix) that hold a sketch. */
export function sketchDirs() {
  const dirs = new Set(fs.readdirSync(SRC, { recursive: true })
    .filter(f => f.endsWith('.pde'))
    .map(f => posix(path.dirname(f))));
  return [...dirs].sort(byCodePoint);
}

export function mainPde(relDir) {
  const d = path.join(SRC, relDir);
  const named = path.join(d, `${path.basename(d)}.pde`);
  if (fs.existsSync(named)) return named;
  const pdes = fs.readdirSync(d).filter(f => f.endsWith('.pde') && !SKIP_FILES.has(f));
  return path.join(d, pdes.sort(byCodePoint)[0]);
}

const upstreamUrl = pde => UPSTREAM + quote(rel(ROOT, pde));

/** Write p5js/<relDir>/index.html and sketch.js (header + body + original). */
export function writeSketch(relDir, body) {
  const pde = mainPde(relDir);
  const srcRel = rel(ROOT, pde);
  const original = fs.readFileSync(pde, 'utf8').trimEnd();
  const name = path.posix.basename(relDir);
  const header =
    `// ${name} (p5.js ${P5_VERSION} port of a #p5t Processing sketch)\n` +
    `// ${upstreamUrl(pde)}\n` +
    `// ${srcRel}\n`;
  const quoted = original.includes('*/')
    // The source has its own block comment, so comment it line by line.
    ? original.split('\n').map(line => ('// ' + line).trimEnd()).join('\n')
    : `/*\n${original}\n*/`;
  const footer = `\n// ---- Original Processing source: ${srcRel}\n${quoted}\n`;
  const out = path.join(OUT, relDir);
  fs.mkdirSync(out, { recursive: true });
  fs.writeFileSync(path.join(out, 'sketch.js'), header + '\n' + body.trim() + '\n' + footer);
  let libs = '';
  if (LIB_USE.test(body)) {
    const lib = '../'.repeat(relDir.split('/').length) + 'lib/p5t.js';
    libs = `    <script src="${lib}"></script>\n`;
  }
  fs.writeFileSync(path.join(out, 'index.html'),
    indexHtml({ title: escapeHtml(name), p5Url: P5_URL, libs }));
}

/** Write p5js/sketches.js (the sketch list) and p5js/play/players.js. */
export function buildGallery() {
  const items = sketchDirs().map(r => ({
    path: r,
    name: path.posix.basename(r),
    group: path.posix.dirname(r),
    done: fs.existsSync(path.join(OUT, r, 'sketch.js')),
    src: upstreamUrl(mainPde(r)),
  }));
  const done = items.filter(i => i.done).length;
  const rows = items.map(i => '  ' + dumps(i)).join(',\n');
  fs.writeFileSync(path.join(OUT, 'sketches.js'),
    '// Generated by tools/p5t.py gallery; do not edit by hand.\n' +
    `window.P5T_P5_VERSION = ${dumps(P5_VERSION)};\n` +
    `window.P5T_SKETCHES = [\n${rows}\n];\n`);
  buildPlayers();
  console.log(`gallery: ${done}/${items.length} sketches converted`);
}

/** List the players in p5js/play/*\/ for the launcher. */
export function buildPlayers() {
  const players = fs.readdirSync(PLAY)
    .filter(d => fs.existsSync(path.join(PLAY, d, 'index.html')))
    .sort(byCodePoint)
    .map(d => {
      const text = fs.readFileSync(path.join(PLAY, d, 'index.html'), 'utf8');
      const title = text.match(/<title>([\s\S]*?)<\/title>/);
      const desc = text.match(/<meta name="description" content="([\s\S]*?)"/);
      return {
        name: d,
        title: title ? unescapeHtml(title[1].trim()) : '',
        description: desc ? unescapeHtml(desc[1].trim()) : '',
      };
    });
  fs.writeFileSync(path.join(PLAY, 'players.js'),
    '// Generated by tools/p5t.py gallery; do not edit by hand.\n' +
    `window.P5T_PLAYERS = ${dumps(players, 1)};\n`);
  console.log(`players: ${players.map(p => p.name).join(', ')}`);
}

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

/** Copy p5js/play/<base>/ to p5js/play/<name>/ and retitle it. */
export function newPlayer(name, base) {
  const src = path.join(PLAY, base), dst = path.join(PLAY, name);
  if (!/^[A-Za-z0-9_-]+$/.test(name)) {
    fail(`player name must be letters, digits, - or _: '${name}'`);
  }
  if (!fs.existsSync(path.join(src, 'index.html'))) fail(`no player '${base}' in ${rel(ROOT, PLAY)}`);
  if (fs.existsSync(dst)) fail(`${rel(ROOT, dst)} already exists`);
  fs.cpSync(src, dst, { recursive: true });
  const page = path.join(dst, 'index.html');
  fs.writeFileSync(page, fs.readFileSync(page, 'utf8')
    .replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escapeHtml(name)}</title>`));
  console.log(`created ${rel(ROOT, dst)}/ from ${base}`);
  buildPlayers();
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === 'gallery') buildGallery();
  else if (args.length === 2 && args[0] === 'new-player') newPlayer(args[1], 'wall');
  else if (args.length === 4 && args[0] === 'new-player' && args[2] === '--from') newPlayer(args[1], args[3]);
  else fail(USAGE);
}
