// BlueCircle (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_14_2020/BlueCircle/BlueCircle.pde
// #p5t/ArtSketch/11_14_2020/BlueCircle/BlueCircle.pde

let x, y, t, a, b;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  const pixels = jloadPixels();
  for (x = 0; ++x < 479; )
    for (y = 0; ++y < 479; ) {
      t = 0;
      for (a = x - 1; a < x + 2; a++)
        for (b = y - 1; b < y + 2; ) t += jred(pixels[a + b++ * 480]) > 0 ? 1 : 0;
      t = t == 3 ? -1 : t != 4 ? 0 : jcolor(jred(jget(x, y)) - 99, 255, 255);
      jset(x, y, jcolorInt(t));
    }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_14_2020/BlueCircle/BlueCircle.pde
/*
int x,y,t,a,b;
void setup(){size(480,480);}
void draw(){loadPixels();
 for(x=0;++x<479;)for(y=0;++y<479;){
  t=0;
  for(a=x-1;a<x+2;a++)for(b=y-1; b<y+2;)t+=red(pixels[a+b++*480])>0?1:0;
  t=t==3?-1:t!=4?0:color(red(get(x,y))-99,255,255);
  set(x,y,color(t));}}//#p5t
*/
