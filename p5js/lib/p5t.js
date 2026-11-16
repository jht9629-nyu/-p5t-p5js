// p5t.js: Processing-style pixels and int colors for the #p5t p5.js ports.
// For p5.js 2.x; uses only public p5 functions, so it also works in the p5.js
// web editor, loaded from https://jht9629-nyu.github.io/-p5t-p5js/lib/p5t.js
//
// Processing sketches treat colors as Java ints (0xAARRGGBB, so -1 is white
// and #000000 is 0xFF000000) and read and write the canvas with get(), set()
// and pixels[]. p5's versions use p5.Color objects and are far too slow for
// loops over every pixel, so the ports use these j-prefixed stand-ins:
//
//   jcreateCanvas(w, h) createCanvas() with one canvas pixel per sketch pixel,
//                       set up for fast pixel reads; use it instead of
//                       pixelDensity(1) + createCanvas() in sketches that use jget/jset
//   jsync()             hand the canvas between jget/jset and p5 drawing (see below)
//   jget(x, y)          Processing get(x, y): int color, 0 when off-canvas
//   jset(x, y, c)       Processing set(x, y, c) with an int color
//   jloadPixels()       Processing loadPixels(); returns a pixels[] snapshot
//   jcolorMode(...)     colorMode() that the j-color functions below follow;
//                       use it instead of colorMode() in sketches that use them
//   jcolor(...)         Processing color() with float arguments -> int
//   jcolorInt(c[, a])   Processing color(int) / color(int, alpha) -> int
//   jred/jgreen/jblue/jhue/jsaturation/jbrightness(c)   channel of an int color
//   jlerpColor(a, b, t) Processing lerpColor() in RGB mode
//   jfill/jstroke/jbackground(c[, a])   fill()/stroke()/background() with an int color
//   idiv(a, b)          Java int division (truncates toward zero)
//   jint(v)             Java (int) cast of a float (truncates, saturates, NaN -> 0)
//
// jget/jset work on an int buffer copied from the canvas. Call jsync():
//   - before p5 draws anything (background, shapes, text, image) after
//     jget()/jset()/jloadPixels() calls in the same frame
//   - at the end of draw()
// jsync() writes jset() changes to the canvas and makes the next pixel access
// reload the buffer from the canvas, so it sees whatever p5 drew in between.
// A few jget() calls right after jsync() read single pixels instead of
// reloading the whole buffer.
// Processing's display surface is opaque, so pixels always show at full
// alpha, and get() reports alpha 0xFF as Processing's RGB surface does.

let _pxBuf = null; // Int32Array, one ARGB int per pixel
let _pxImg = null; // ImageData the size of the canvas
let _pxW = 0;
let _pxH = 0;
let _pxStale = true; // canvas may have changed since the buffer was loaded
let _pxDirty = false; // buffer changed since it was written to the canvas
let _pxStaleReads = 0; // single-pixel reads since the last jsync()

function jcreateCanvas(w, h) {
  // Reading pixels back every frame is much faster from a CPU-backed canvas.
  // The context made here is the one p5 gets when it calls getContext('2d').
  const elt = document.createElement('canvas');
  elt.getContext('2d', { willReadFrequently: true });
  const renderer = createCanvas(w, h, P2D, elt);
  // p5 2.x keeps pixel density on the renderer, and createCanvas() makes a new
  // one at devicePixelRatio, so pixelDensity(1) has to come after it.
  pixelDensity(1);
  _pxStale = true;
  _pxDirty = false;
  return renderer;
}

function _pxLoad() {
  const ctx = drawingContext;
  _pxW = ctx.canvas.width;
  _pxH = ctx.canvas.height;
  _pxImg = ctx.getImageData(0, 0, _pxW, _pxH);
  const d = _pxImg.data;
  if (!_pxBuf || _pxBuf.length !== _pxW * _pxH) _pxBuf = new Int32Array(_pxW * _pxH);
  for (let i = 0, j = 0; i < _pxBuf.length; i++, j += 4) {
    _pxBuf[i] = (d[j + 3] << 24) | (d[j] << 16) | (d[j + 1] << 8) | d[j + 2];
  }
  _pxStale = false;
}

function _pxFlush() {
  if (!_pxDirty) return;
  const d = _pxImg.data;
  for (let i = 0, j = 0; i < _pxBuf.length; i++, j += 4) {
    const c = _pxBuf[i];
    d[j] = (c >> 16) & 255;
    d[j + 1] = (c >> 8) & 255;
    d[j + 2] = c & 255;
    d[j + 3] = 255;
  }
  drawingContext.putImageData(_pxImg, 0, 0);
  _pxDirty = false;
}

function jsync() {
  _pxFlush();
  _pxStale = true;
  _pxStaleReads = 0;
}

function jget(x, y) {
  x |= 0;
  y |= 0;
  if (_pxStale) {
    // A few reads between shapes (say, one per text() call) are cheaper one
    // pixel at a time than reloading the whole buffer before each.
    if (++_pxStaleReads <= 64) {
      const c = drawingContext.canvas;
      if (x < 0 || y < 0 || x >= c.width || y >= c.height) return 0;
      const d = drawingContext.getImageData(x, y, 1, 1).data;
      return (0xff000000 | (d[0] << 16) | (d[1] << 8) | d[2]) | 0;
    }
    _pxLoad();
  }
  if (x < 0 || y < 0 || x >= _pxW || y >= _pxH) return 0;
  return _pxBuf[x + y * _pxW] | 0xff000000;
}

function jset(x, y, c) {
  x |= 0;
  y |= 0;
  if (_pxStale) _pxLoad();
  if (x < 0 || y < 0 || x >= _pxW || y >= _pxH) return;
  _pxBuf[x + y * _pxW] = c;
  _pxDirty = true;
}

function jloadPixels() {
  if (_pxStale) _pxLoad();
  return _pxBuf.slice();
}

// The color mode and per-mode maxes, kept here because p5 2.x keeps its own
// copy in renderer internals. Defaults match p5's. The mode is RGB or HSB.
let _cMode = null;
let _cMaxes = null;

function _colorState() {
  if (!_cMode) {
    _cMode = RGB;
    _cMaxes = { [RGB]: [255, 255, 255, 255], [HSB]: [360, 100, 100, 1] };
  }
  return [_cMode, _cMaxes[_cMode]];
}

function jcolorMode(mode, max1, max2, max3, maxA) {
  colorMode(...arguments);
  _colorState();
  if (mode !== RGB && mode !== HSB) return;
  _cMode = mode;
  const m = (_cMaxes[mode] = _cMaxes[mode].slice());
  if (arguments.length === 2) m.fill(max1);
  else if (arguments.length >= 4) {
    m[0] = max1;
    m[1] = max2;
    m[2] = max3;
    if (arguments.length >= 5) m[3] = maxA;
  }
}

const _clamp01 = (v) => (v > 1 ? 1 : v > 0 ? v : 0);

function _pack(a, r, g, b) {
  return ((a * 255) << 24) | ((r * 255) << 16) | ((g * 255) << 8) | (b * 255);
}

function jcolor(v1, v2, v3, v4) {
  const [mode, max] = _colorState();
  const n = arguments.length;
  const a = _clamp01((n === 2 ? v2 : n === 4 ? v4 : max[3]) / max[3]);
  if (n <= 2) {
    // Processing scales gray by the first color max, even in HSB mode.
    const g = _clamp01(v1 / max[0]);
    return _pack(a, g, g, g);
  }
  const x = _clamp01(v1 / max[0]);
  const y = _clamp01(v2 / max[1]);
  const z = _clamp01(v3 / max[2]);
  if (mode === RGB) return _pack(a, x, y, z);
  // HSB, as Processing converts it
  if (y === 0) return _pack(a, z, z, z);
  const which = (x - Math.floor(x)) * 6;
  const f = which - Math.floor(which);
  const p = z * (1 - y);
  const q = z * (1 - y * f);
  const t = z * (1 - y * (1 - f));
  switch (Math.floor(which)) {
    case 0: return _pack(a, z, t, p);
    case 1: return _pack(a, q, z, p);
    case 2: return _pack(a, p, z, t);
    case 3: return _pack(a, p, q, z);
    case 4: return _pack(a, t, p, z);
    default: return _pack(a, z, p, q);
  }
}

// color(int): small non-negative ints are gray levels, anything else is
// already an ARGB color. With an alpha argument, only the alpha is replaced.
function jcolorInt(c, alpha) {
  const [, max] = _colorState();
  const gray = (c & 0xff000000) === 0 && c <= max[0];
  if (arguments.length < 2) return gray ? jcolor(c) : c | 0;
  if (gray) return jcolor(c, alpha);
  return (((_clamp01(alpha / max[3]) * 255) << 24) | (c & 0xffffff)) | 0;
}

const jred = (c) => (((c >> 16) & 255) / 255) * _colorState()[1][0];
const jgreen = (c) => (((c >> 8) & 255) / 255) * _colorState()[1][1];
const jblue = (c) => ((c & 255) / 255) * _colorState()[1][2];

// java.awt.Color.RGBtoHSB, which Processing's hue()/saturation()/brightness() use
function _hsb(c) {
  const r = (c >> 16) & 255;
  const g = (c >> 8) & 255;
  const b = c & 255;
  const cmax = Math.max(r, g, b);
  const cmin = Math.min(r, g, b);
  const bri = cmax / 255;
  const sat = cmax !== 0 ? (cmax - cmin) / cmax : 0;
  let hue = 0;
  if (sat !== 0) {
    const rc = (cmax - r) / (cmax - cmin);
    const gc = (cmax - g) / (cmax - cmin);
    const bc = (cmax - b) / (cmax - cmin);
    if (r === cmax) hue = bc - gc;
    else if (g === cmax) hue = 2 + rc - bc;
    else hue = 4 + gc - rc;
    hue /= 6;
    if (hue < 0) hue += 1;
  }
  return [hue, sat, bri];
}
const jhue = (c) => _hsb(c)[0] * _colorState()[1][0];
const jsaturation = (c) => _hsb(c)[1] * _colorState()[1][1];
const jbrightness = (c) => _hsb(c)[2] * _colorState()[1][2];

function jlerpColor(c1, c2, amt) {
  amt = _clamp01(amt);
  const ch = (c, s) => (c >> s) & 255;
  const mix = (s) => Math.round(ch(c1, s) + (ch(c2, s) - ch(c1, s)) * amt);
  return (mix(24) << 24) | (mix(16) << 16) | (mix(8) << 8) | mix(0);
}

function _css(c) {
  const a = ((c >> 24) & 255) / 255;
  return `rgba(${(c >> 16) & 255},${(c >> 8) & 255},${c & 255},${a})`;
}
function jfill(c, a) {
  fill(_css(arguments.length < 2 ? jcolorInt(c) : jcolorInt(c, a)));
}
function jstroke(c, a) {
  stroke(_css(arguments.length < 2 ? jcolorInt(c) : jcolorInt(c, a)));
}
function jbackground(c, a) {
  background(_css(arguments.length < 2 ? jcolorInt(c) : jcolorInt(c, a)));
}

const idiv = (a, b) => (a / b) | 0;

function jint(v) {
  if (v !== v) return 0;
  if (v >= 2147483647) return 2147483647;
  if (v <= -2147483648) return -2147483648;
  return Math.trunc(v);
}
