// A grid of sketches in random order; every SWAP seconds one cell, in turn,
// gets the next sketch. Override any setting from the URL, e.g. ?cols=3&swap=8.
const S = P5T.params({
  cols: 2,        // cells across
  rows: 4,        // cells down
  w: 500,         // cell size in px; most sketches are 500 x 500
  h: 500,
  swap: 5,        // seconds between swaps
  zoom: 1,        // scale sketches inside their cell (0.9 = shrink 10%)
  labels: true,   // show each sketch's tag in its corner: <index> <MMDD> <name>
  credit: '#p5t-p5js 2026-09-29',  // bottom-right overlay; ?credit= hides it
});

const stage = document.getElementById('stage');
stage.style.gridTemplateColumns = `repeat(${S.cols}, ${S.w}px)`;
stage.style.gridTemplateRows = `repeat(${S.rows}, ${S.h}px)`;
document.body.classList.toggle('no-labels', !S.labels);

if (S.credit) {
  const credit = Object.assign(document.createElement('div'),
    { className: 'credit', textContent: S.credit });
  stage.append(credit);
}

// Tag for a sketch: its 1-based place in the full list, then the month and day
// from its date folder (e.g. ArtSketch/05_11_2021), then its name.
// e.g. '01 0511 LangtonsAnt'. Sketches without a date folder skip the date.
function tag(it) {
  const index = String(P5T.SKETCHES.indexOf(it) + 1).padStart(2, '0');
  const dates = [...it.group.matchAll(/(\d\d)_(\d\d)_\d+/g)];
  const date = dates.length ? dates.at(-1)[1] + dates.at(-1)[2] : '';
  return [index, date, it.name].filter(Boolean).join(' ');
}

const cells = [];
for (let i = 0; i < S.cols * S.rows; i++) {
  const el = document.createElement('div');
  el.className = 'cell';
  stage.append(el);
  cells.push({ el, path: null });
}

const draw = P5T.deck(P5T.PLAYABLE);
const onWall = path => cells.some(c => c.path === path);

// Load the new sketch hidden and swap it in once it has loaded, so the cell
// never flashes blank.
function play(cell, it) {
  cell.path = it.path;
  const url = P5T.sketchUrl(it.path);
  const frame = document.createElement('iframe');
  frame.className = 'loading';
  frame.width = Math.round(S.w / S.zoom);
  frame.height = Math.round(S.h / S.zoom);
  frame.style.transform = `scale(${S.zoom})`;
  frame.tabIndex = -1;
  frame.scrolling = 'no';   // sketch pages run a few px past their 500 x 500 canvas
  frame.src = url;
  const label = Object.assign(document.createElement('a'),
    { className: 'label', href: url, target: '_blank', textContent: tag(it), title: it.path });
  frame.addEventListener('load', () => {
    // Remove the old sketch around the new frame; moving an iframe reloads it.
    [...cell.el.children].forEach(c => c !== frame && c.remove());
    cell.el.append(label);
    frame.classList.remove('loading');
  }, { once: true });
  cell.el.append(frame);
}

cells.forEach(c => play(c, draw(onWall)));

// Replace cells in turn, so each sketch stays up for cols * rows * swap seconds.
let turn = 0;
setInterval(() => {
  play(cells[turn], draw(onWall));
  turn = (turn + 1) % cells.length;
}, S.swap * 1000);

P5T.fit(stage, S.cols * S.w, S.rows * S.h);
