// SnailShellFinal (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_17_21/SnailShellFinal/SnailShellFinal.pde
// #p5t/ArtSketch/05_17_21/SnailShellFinal/SnailShellFinal.pde

let m = -1,
  s = 480,
  x = 0,
  y = m,
  o = s / 2,
  p = o,
  n = 0xff000000 | 0, // #000000
  a = n,
  T;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(0); // clear()
}

function draw() {
  const pixels = jloadPixels();
  T = pixels[o + p * s];
  if (a == T) {
    T = n;
    if (x != 0) {
      y = x;
      x = 0;
    } else {
      x = -y;
      y = 0;
    }
    a = a > n ? n : m;
  } else {
    a = a < m ? (T = n) : (T = m);
    if (x != 0) {
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

// ---- Original Processing source: #p5t/ArtSketch/05_17_21/SnailShellFinal/SnailShellFinal.pde
/*
int m=-1,s=480,x,y=m,o=s/2,p=o,n=#000000,a=n,T;
void setup(){size(480, 480);clear();}void draw(){loadPixels();T=pixels[o+p*s];if(a==T){T=n;if(x!=0){y=x;x=0;}else{x=-y;y=0;}a=a>n?n:m;}else{a=a<m?T=n:(T=m);if(x!=0){y=-x;x=0;}else{x=y;y=0;}}set(o,p,T);o+=x+s;o%=s;p+=y+s;p%=s;}//#p5t
*/
