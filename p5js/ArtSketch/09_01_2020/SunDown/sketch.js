// SunDown (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_01_2020/SunDown/SunDown.pde
// #p5t/ArtSketch/09_01_2020/SunDown/SunDown.pde

let x, y, c, n = 500, l = 255;
let a = 0,
  b = 0,
  d,
  f = 0;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, l);
}

function draw() {
  f -= 0.75;
  for (x = 0; x < n; x++)
    for (y = 0; y < n; y++) {
      d = dist(x, y, a, b);
      c =
        d < f
          ? jcolor(f % l, l, l)
          : jcolor(
              d % l,
              l,
              jbrightness(jget(x, y)) - noise(x / 9, y / 9) * 5 - random(5)
            );
      jset(x, y, c);
    }
  if (f < -50) {
    f = l * 1.5;
    a = l;
    b = l;
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_01_2020/SunDown/SunDown.pde
/*
int x,y,c,n=500,l=255;float a,b,d,f;
void setup(){size(500,500);colorMode(HSB,l);}void draw(){f-=.75;for(x=0;x<n;x++)for(y=0;y<n;y++){d=dist(x,y,a,b);c=d<f?color(f%l,l,l):color(d%l,l,brightness(get(x,y))-noise(x/9f,y/9f)*5-random(5));set(x,y,c);}if(f<-50){f=l*1.5;a=l;b=l;}}//#p5t
*/
