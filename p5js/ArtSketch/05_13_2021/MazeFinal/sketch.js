// MazeFinal (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_13_2021/MazeFinal/MazeFinal.pde
// #p5t/ArtSketch/05_13_2021/MazeFinal/MazeFinal.pde

// The original used frameRate(480); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 8;


let s = 480,
  n = -s * s,
  m = -1,
  x = 0,
  y = m,
  o = s / 2,
  p = o,
  a = n,
  T;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  const pixels = jloadPixels();
  T = pixels[o + p * s];
  if (T < m) {
    jset(o, p, m);
    if (a == n) a = m;
    else if (x != 0) {
      y = -x;
      x = 0;
    } else {
      x = y;
      y = 0;
    }
  } else {
    jset(o, p, n);
    if (a == m) a = n;
    else if (x != 0) {
      y = x;
      x = 0;
    } else {
      x = -y;
      y = 0;
    }
  }
  o += x + s;
  o %= s;
  p += y + s;
  p %= s;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/05_13_2021/MazeFinal/MazeFinal.pde
/*
int s=480, n=-s*s, m=-1, x, y=m, o=s/2, p=o, a=n, T;
void setup() {
  size(480, 480);frameRate(s);
}
void draw() {
  loadPixels();
  T=pixels[o+p*s];
  if (T<m) {
    set(o, p, m);
    if (a==n)a=m;
    else if (x!=0) {
      y=-x;
      x=0;
    } else {
      x=y;
      y=0;
    }
  } else {
    set(o, p, n);
    if (a==m)a=n;
    else if (x!=0) {
      y=x;
      x=0;
    } else {
      x=-y;
      y=0;
    }
  }
  o+=x+s;
  o%=s;
  p+=y+s;
  p%=s;
}//#p5t
*/
