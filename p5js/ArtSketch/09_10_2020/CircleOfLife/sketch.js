// CircleOfLife (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_10_2020/CircleOfLife/CircleOfLife.pde
// #p5t/ArtSketch/09_10_2020/CircleOfLife/CircleOfLife.pde

let x, y, t, a, b, f = 0;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
}

function draw() {
  const pixels = jloadPixels();
  for (x = 1; x < 499; x++)
    for (y = 1; y < 499; ) {
      t = 0;
      for (a = x - 1; a < x + 2; a++)
        for (b = y - 1; b < y + 2; ) t = jint(t + jred(pixels[a + b++ * 500]) / 255);
      let d = dist(99, 99, x, y);
      t =
        d > f && d < f + 0.2
          ? -1
          : t == 3
          ? -1
          : t != 4
          ? 0xff000000 | 0 // #000000
          : jget(x, y);
      jset(x, y++, t);
    }
  if (f-- < 0) f = 599;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_10_2020/CircleOfLife/CircleOfLife.pde
/*
int x,y,t,a,b,f;void setup(){size(500,500);}void draw(){loadPixels();for(x=1;x<499;x++)for(y=1;y<499;){t=0;for(a=x-1;a<x+2;a++)for(b=y-1;b<y+2;)t+=red(pixels[a+b++*500])/255;float d=dist(99,99,x,y);t=d>f&d<f+.2?-1:t==3?-1:t!=4?#000000:get(x,y);set(x,y++,t);}if(f--<0)f=599;}//#p5t
*/
