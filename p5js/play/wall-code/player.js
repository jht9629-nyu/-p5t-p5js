// Like wall, but each row pairs one sketch with its sketch.js source, and the
// sides alternate: row 1 canvas | code, row 2 code | canvas, and so on. Every
// SWAP seconds one row, in turn, gets the next sketch.
// Override any setting from the URL, e.g. ?rows=3&swap=8&font=10.
const S = P5T.params({
  rows: 4,        // sketch + code pairs down
  w: 500,         // canvas cell size in px; most sketches are 500 x 500
  h: 500,
  cw: 500,        // code cell width in px
  font: 11,       // code font size in px
  swap: 5,        // seconds between swaps
  zoom: 1,        // scale sketches inside their cell (0.9 = shrink 10%)
  labels: true,   // show each sketch's tag bottom right over its code: <index> <MMDD> <name>
  credit: '#p5t-p5js-2026-10-02',  // bottom-right overlay; ?credit= hides it
  qr: 120,        // QR code size in px above the credit; ?qr=0 hides it
});

const stage = document.getElementById('stage');
stage.style.setProperty('--code-font', `${S.font}px`);
document.body.classList.toggle('no-labels', !S.labels);

if (S.credit || S.qr) {
  const credit = Object.assign(document.createElement('div'), { className: 'credit' });
  if (S.qr) {
    const qr = Object.assign(document.createElement('img'),
      { src: '../../../qrcode/qrcode-p5t-p5js.png', alt: 'QR code' });
    qr.style.width = qr.style.height = `${S.qr}px`;
    credit.append(qr);
  }
  if (S.credit) credit.append(Object.assign(document.createElement('div'), { textContent: S.credit }));
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

// One row per sketch: a canvas cell and a code cell, sides swapped on even rows.
// The code cell wraps the <pre> so the label can sit over it without being
// wiped when the code text is replaced.
const rows = [];
for (let i = 0; i < S.rows; i++) {
  const line = document.createElement('div');
  line.className = 'row';
  line.style.height = `${S.h}px`;
  const el = document.createElement('div');
  el.className = 'cell';
  el.style.width = `${S.w}px`;
  const side = document.createElement('div');
  side.className = 'code-cell';
  side.style.width = `${S.cw}px`;
  const code = document.createElement('pre');
  code.className = 'code';
  side.append(code);
  line.append(...(i % 2 ? [side, el] : [el, side]));
  stage.append(line);
  rows.push({ el, side, code, path: null });
}

const draw = P5T.deck(P5T.PLAYABLE);
const onWall = path => rows.some(r => r.path === path);

// Every sketch keeps its code in sketch.js next to its index.html.
const source = url => fetch(url + 'sketch.js')
  .then(r => (r.ok ? r.text() : Promise.reject(r.status)))
  .catch(() => '// sketch.js could not be loaded\n// (serve this page over http, not file://)');

// Load the new sketch hidden and swap it and its code in once both have
// loaded, so the row never flashes blank.
function play(row, it) {
  row.path = it.path;
  const url = P5T.sketchUrl(it.path);
  const frame = document.createElement('iframe');
  frame.className = 'loading';
  frame.width = Math.round(S.w / S.zoom);
  frame.height = Math.round(S.h / S.zoom);
  frame.style.transform = `scale(${S.zoom})`;
  frame.tabIndex = -1;
  frame.scrolling = 'no';   // sketch pages run a few px past their 500 x 500 canvas
  const label = Object.assign(document.createElement('a'),
    { className: 'label', href: url, target: '_blank', textContent: tag(it), title: it.path });
  const loaded = new Promise(resolve =>
    frame.addEventListener('load', resolve, { once: true }));
  Promise.all([source(url), loaded]).then(([text]) => {
    if (row.path !== it.path) return;   // a newer sketch has taken this row
    // Remove the old sketch around the new frame; moving an iframe reloads it.
    [...row.el.children].forEach(c => c !== frame && c.remove());
    row.side.querySelector('.label')?.remove();
    row.side.append(label);
    frame.classList.remove('loading');
    row.code.textContent = text;
    row.code.scrollTop = 0;
  });
  frame.src = url;
  row.el.append(frame);
}

rows.forEach(r => play(r, draw(onWall)));

// Replace rows in turn, so each sketch stays up for rows * swap seconds.
let turn = 0;
setInterval(() => {
  play(rows[turn], draw(onWall));
  turn = (turn + 1) % rows.length;
}, S.swap * 1000);

P5T.fit(stage, S.w + S.cw, S.rows * S.h);
