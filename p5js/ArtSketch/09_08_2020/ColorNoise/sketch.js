// ColorNoise (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_08_2020/ColorNoise/ColorNoise.pde
// #p5t/ArtSketch/09_08_2020/ColorNoise/ColorNoise.pde

let x, y, c, f = 0, n = 500, a = -1, b;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  b = jcolorInt(0); // color(0) before colorMode(): black
  colorMode(HSB, n);
}

function draw() {
  for (x = 0; x < n; x++)
    for (y = 0; y < n; y++) {
      c = jred(jcolor(noise((x + 0) / 99, y / 99) * n)) > f ? a : b;
      jset(x, y, c);
    }
  f += 4;
  if (f > n * 0.9) {
    f = 0;
    noiseSeed(a);
    a = b;
    b = jcolor(random(n), n, n);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_08_2020/ColorNoise/ColorNoise.pde
/*
int x,y,c,f,n=500,a=-1,b=color(0);
void setup(){size(500,500);colorMode(HSB,n);}
void draw(){
 for(x=0;x<n;x++)
  for(y=0;y<n;y++){
   c=red(color(noise((x+0)/99f,y/99f)*n))>f?a:b;
   set(x,y,c);}
 f+=4;
 if(f>n*.9){
  f=0;
  noiseSeed(a);
  a=b;
  b=color(random(n),n,n);}}//#p5t
*/
