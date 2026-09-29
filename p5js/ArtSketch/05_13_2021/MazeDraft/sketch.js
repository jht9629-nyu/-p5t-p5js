// MazeDraft (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_13_2021/MazeDraft/MazeDraft.pde
// #p5t/ArtSketch/05_13_2021/MazeDraft/MazeDraft.pde

// The original used frameRate(480); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 8;


let n = 0xff000000 | 0, // #000000
  m = -1,
  x = 0,
  y = m,
  s = 480,
  o = s / 2,
  p = o,
  T,
  a = n;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(0); // clear()
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  const pixels = jloadPixels();
  T = pixels[(o % s) + p * s];
  if (T == n) {
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

  // o is never wrapped, so after the first step every set() lands off-canvas
  // and is ignored, as in Processing; only the reads use o % s.
  o += x + s;
  p += y + s;
  p %= s;
}

// ---- Original Processing source: #p5t/ArtSketch/05_13_2021/MazeDraft/MazeDraft.pde
/*
int n=#000000,m=-1,x,y=m,s=480,o=s/2,p=o,T,a=n;
void setup(){
  size(480, 480);
  clear();
  frameRate(s);
}

void draw() {
  loadPixels();
  T=pixels[(o%s)+p*s];
  if(T==n){
    set(o, p, m);
    if(a==n)
      a=m;
    else
      if (x!=0) {
        y=-x;
        x=0;
      } else {
        x=y;
        y=0;
      }
  } else {
    set(o, p, n);
    if(a==m)
      a=n;
    else
      if (x!=0) {
        y=x;
        x=0;
      } else {
        x=-y;
        y=0;
      }
    }
    
  o+=x+s;
  p+=y+s;
  p%=s;
}
*/
