// ColorLightning (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_27_2020/ColorLightning/ColorLightning.pde
// #p5t/ArtSketch/08_27_2020/ColorLightning/ColorLightning.pde

// The original used frameRate(999); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 16;


let x, y, f = 0, c = 250, a = 0, b = 0, n = 0, i, p = 99, m = 500;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(0); // clear()
  colorMode(HSB, c);
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  f++;
  a = a > m ? 0 : a < 0 ? m : a;
  b = b > m ? 0 : b < 0 ? m : b;
  jset(b, a, jcolor(idiv(f, p) % c, c, c));
  n = n == 5 ? Math.trunc(random(9)) : ++n % 9;
  i = 8;
  for (x = a - 1; x < a + 2; x++)
    for (y = b - 1; y < b + 2; y++, i--)
      if (i == n) {
        a = x;
        b = y;
      }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_27_2020/ColorLightning/ColorLightning.pde
/*
int x,y,f,c=250,a,b,n,i,p=99,m=500;
void setup(){size(500,500);clear();colorMode(HSB,c);frameRate(999);}
void draw(){f++;a=a>m?0:a<0?m:a;b=b>m?0:b<0?m:b;set(b,a,color(f/p%c,c,c));n=n==5?int(random(9)):++n%9;i=8;for(x=a-1;x<a+2;x++)for(y=b-1;y<b+2;y++,i--)if(i==n){a=x;b=y;}}//#p5t
*/
