// ColorStorm (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_15_2020/ColorStorm/ColorStorm.pde
// #p5t/ArtSketch/11_15_2020/ColorStorm/ColorStorm.pde

let m = 0, x, y, o = 0, p = 0, n = 480;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  colorMode(HSB, 255); // colorMode(3) keeps Processing's 255 ranges
}

function draw() {
  if (m < 1 || m >= n * n) {
    jset(n - 1, n - 1, (o = p));
    jset(9, 9, (p = jcolor(random(n), n, n)));
  }
  for (m = x = 0; x < n; x++) for (y = 0; y < n; y++) m += c(o) + c(p);
}

function c(l) {
  if (jget(x, y) == l) {
    jset(Math.trunc(random(4)) - 2 + x, Math.trunc(random(4)) - 2 + y, l);
    return 1;
  }
  return 0;
}

// ---- Original Processing source: #p5t/ArtSketch/11_15_2020/ColorStorm/ColorStorm.pde
/*
int m,x,y,o,p,n=480;void setup(){size(480,480);colorMode(3);}void draw(){if(m<1|m>=n*n){set(n-1,n-1,o=p);set(9,9,p=color(random(n),n,n));}for(m=x=0;x<n;x++)for(y=0;y<n;y++)m+=c(o)+c(p);}int c(int l){if(get(x,y)==l){set(int(random(4))-2+x,int(random(4))-2+y,l);return 1;}return 0;}
*/
