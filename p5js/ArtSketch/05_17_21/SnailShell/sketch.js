// SnailShell (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_17_21/SnailShell/SnailShell.pde
// #p5t/ArtSketch/05_17_21/SnailShell/SnailShell.pde

// The original used frameRate(480); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 8;


let m = -1,
  s = 480,
  x = 0,
  y = m,
  o = s / 2,
  p = o,
  n = -s * o,
  a = m,
  T;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  jbackground(m);
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  const pixels = jloadPixels();
  T = pixels[o + p * s];

  // (a, Turn, T)
  //        T:n         T:m
  //a:n (a:m,R,T:n) (a:n,L,T:n)
  //a:m (a:m,L,T:m) (a:n,R,T:n)
  if (a == T) {
    //a==T
    T = m; //println("same");
    if (x != 0) {
      //R
      y = x;
      x = 0;
    } else {
      x = -y;
      y = 0;
    }
    if (a != m) a = m;
    else a = n;
  } else {
    //println("diff");
    // (a, Turn, T)
    //        T:n         T:m
    //a:n (a:m,R,T:n) (a:n,L,T:n)
    //a:m (a:m,L,T:m) (a:n,R,T:n)
    if (a != n) a = m;
    else a = n;
    if (T != n) T = n;
    else T = m;
    if (x != 0) {
      //L
      y = -x;
      x = 0;
    } else {
      x = y;
      y = 0;
    }
  }
  jset(o, p, T);
  o += x + s;
  o %= s;
  p += y + s;
  p %= s;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/05_17_21/SnailShell/SnailShell.pde
/*
int m=-1,s=480, x, y=m, o=s/2, p=o, n=-s*o,a=m, T;
void setup() {
  size(480, 480);
  background(m);
  frameRate(s);
}
void draw() {
  loadPixels();
  T=pixels[o+p*s];
  
// (a, Turn, T)
//        T:n         T:m
//a:n (a:m,R,T:n) (a:n,L,T:n)
//a:m (a:m,L,T:m) (a:n,R,T:n)
  if (a==T) { //a==T
    T=m;  //println("same");  
    if (x!=0) { //R
      y=x;
      x=0;
    } else {
      x=-y;
      y=0;
    }
    if(a!=m)a=m;else a=n;
  } else {  //println("diff");  
// (a, Turn, T)
//        T:n         T:m
//a:n (a:m,R,T:n) (a:n,L,T:n)
//a:m (a:m,L,T:m) (a:n,R,T:n)
    if(a!=n)a=m;else a=n;
    if(T!=n)T=n;else T=m;
    if(x!=0) { //L
      y=-x;
      x=0;
    } else {
      x=y;
      y=0;
    }
  }
  set(o,p,T);
  o+=x+s;
  o%=s;
  p+=y+s;
  p%=s;
}//#p5t
*/
