// Every sketch grouped by date; the one picked plays beside the list.
// URL settings: ?loop=1 starts looping, secs sets how long each sketch plays.
const S = P5T.params({
  loop: false,    // start in loop mode
  secs: 7,        // seconds per sketch when looping
});

const ITEMS = P5T.SKETCHES;
const PLAYABLE = P5T.PLAYABLE;
const list = document.getElementById('list');
document.getElementById('count').textContent =
  `${PLAYABLE.length} of ${ITEMS.length} converted · p5.js ${P5T.P5_VERSION}`;

let group = null;
for (const it of ITEMS) {
  if (it.group !== group) {
    group = it.group;
    const h = document.createElement('h2');
    h.textContent = group;
    list.append(h);
  }
  const a = document.createElement('a');
  a.className = 'item' + (it.done ? '' : ' todo');
  a.href = '#' + it.path;
  a.textContent = it.name;
  a.dataset.path = it.path;
  list.append(a);
}

const hide = document.getElementById('hide');
try { hide.checked = localStorage.getItem('hideTodo') === '1'; } catch (e) {}
const applyHide = () => {
  document.body.classList.toggle('hide-todo', hide.checked);
  try { localStorage.setItem('hideTodo', hide.checked ? '1' : '0'); } catch (e) {}
};
hide.addEventListener('change', applyHide);
applyHide();

function show() {
  const path = decodeURIComponent(location.hash.slice(1));
  const it = ITEMS.find(i => i.path === path && i.done);
  document.querySelectorAll('a.item').forEach(a =>
    a.classList.toggle('sel', a.dataset.path === path));
  if (!it) return;
  const url = P5T.sketchUrl(path);
  const bar = document.getElementById('bar');
  bar.innerHTML = '';
  const title = document.createElement('strong');
  title.textContent = it.name;
  const p = document.createElement('span');
  p.className = 'path';
  p.textContent = path;
  const open = Object.assign(document.createElement('a'),
    { href: url, target: '_blank', textContent: 'Open ↗' });
  const code = Object.assign(document.createElement('a'),
    { href: url + 'sketch.js', target: '_blank', textContent: 'sketch.js' });
  const orig = Object.assign(document.createElement('a'),
    { href: it.src, target: '_blank', textContent: 'Original .pde' });
  bar.append(title, p, open, code, orig);
  const frame = document.createElement('iframe');
  frame.id = 'view';
  frame.src = url;
  document.getElementById('view').replaceWith(frame);
  document.querySelector('a.item.sel')?.scrollIntoView({ block: 'center' });
  if (loop.checked) scheduleNext();
}

// Loop mode: advance to the next converted sketch every S.secs seconds,
// wrapping at the end. Picking a sketch by hand while looping continues from there.
const loop = document.getElementById('loop');
const status = document.getElementById('status');
document.getElementById('loop-label').textContent =
  `Loop: play each sketch for ${S.secs} seconds`;
let timer = null;

function currentIndex() {
  const path = decodeURIComponent(location.hash.slice(1));
  return PLAYABLE.findIndex(i => i.path === path);
}

function scheduleNext() {
  clearTimeout(timer);
  const k = currentIndex();
  status.textContent = `Playing ${k + 1} of ${PLAYABLE.length}`;
  timer = setTimeout(() => {
    location.hash = PLAYABLE[(k + 1) % PLAYABLE.length].path;
  }, S.secs * 1000);
}

function startLoop() {
  clearTimeout(timer);
  status.textContent = '';
  if (!loop.checked) return;
  if (currentIndex() < 0) location.hash = PLAYABLE[0].path; // show() takes over
  else scheduleNext();
}

loop.addEventListener('change', startLoop);
window.addEventListener('hashchange', show);
loop.checked = S.loop;
show();
if (S.loop && currentIndex() < 0) startLoop();
