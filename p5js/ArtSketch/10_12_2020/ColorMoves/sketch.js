// ColorMoves (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_12_2020/ColorMoves/ColorMoves.pde
// #p5t/ArtSketch/10_12_2020/ColorMoves/ColorMoves.pde

let x, y, i = 0, h = 240;
let f = 0,
  b = 15.2;
let s = new Float32Array(h * h * 4);

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, h);
  noStroke();
  for (x = 0; x < h * 2; x++)
    for (y = 0; y < h * 2; ) {
      if (f < 1) s[i] = sin(x / b - y / b) * cos(x / b + y / b) * h;
      else {
        s[i]++;
        jset(x, y, jcolor((h * ((0.25 * s[i] + f * 5) % h)) / h, h, h, 20));
      }
      i = x + y++ * h;
    }
  f += 0.2;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_12_2020/ColorMoves/ColorMoves.pde
/*
int x,y,i,h=240;float f,b=15.2;
float[] s=new float[h*h*4];
void draw(){frame.setSize(480,480);colorMode(HSB,h);noStroke();for(x=0;x<h*2;x++)for(y=0;y<h*2;){if(f<1)s[i]=sin(x/b-y/b)*cos(x/b+y/b)*h;else{s[i]++;set(x,y,color(h*((.25*s[i]+f*5)%h)/h,h,h,20));}i=x+y++*h;}f+=.2;}//#p5t
*/
