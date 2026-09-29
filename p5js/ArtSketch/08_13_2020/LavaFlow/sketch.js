// LavaFlow (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_13_2020/LavaFlow/LavaFlow.pde
// #p5t/ArtSketch/08_13_2020/LavaFlow/LavaFlow.pde

let x, y, i, w = 500, c;
let d = 16,
  f = 0,
  n,
  l = 99,
  p = 40;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  colorMode(HSB, l);
}

function draw() {
  f++;
  for (i = 0; i < w * w; i++) {
    x = i % w;
    y = idiv(i, w);
    n = noise(x / d, (y - f) / d, f / d) * p;
    c =
      x < sin((y - f) / p) * d + n + p ||
      x > cos(y / p) * p + w - n ||
      dist(l, l, x, y) < d + n
        ? jcolor(noise(x, y / d) * p, d)
        : jcolor(n / 2, l, l, p);
    jset(x, y, c);
  }
}
//p5t

// ---- Original Processing source: #p5t/ArtSketch/08_13_2020/LavaFlow/LavaFlow.pde
/*
int x,y,i,w=500,c;float d=16,f,n,l=99,p=40;void setup(){size(500,500);colorMode(HSB,l);}
void draw(){f++;for(i=0;i<w*w;i++){x=i%w;y=i/w;n=noise(x/d,(y-f)/d,f/d)*p;c=x<sin((y-f)/p)*d+n+p|x>cos(y/p)*p+w-n|dist(l,l,x,y)<d+n?color(noise(x,y/d)*p,d):color(n/2,l,l,p);set(x,y,c);}}//p5t
*/
