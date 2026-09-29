// SpiralWorm (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_23_2020/SpiralWorm/SpiralWorm.pde
// #p5t/ArtSketch/09_23_2020/SpiralWorm/SpiralWorm.pde

let i, x, y, m, f = 0, s, w, d = 1;

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  f += d;
  s = sin((PI * f) / 765) * 3;
  background(s * 255);
  m = 1 / 9;
  translate(250, 250);
  rotate(s);
  for (i = 0; i < 999; i++) {
    x = sin(i * m) * i + sin((f + i) / 9) * 9;
    y = cos(i * m) * i + cos((f + i) / 9) * 9;
    fill(255); // fill(-1): -1 is opaque white as a Java int color
    if (i % 2 == 0) fill(0);
    circle(x, y, 50);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_23_2020/SpiralWorm/SpiralWorm.pde
/*
float i,x,y,m,f,s,w,d=1;
void setup(){size(500,500);noStroke();}
void draw(){f+=d;s=sin(PI*f/765)*3;background(s*255);m=1f/9;translate(250,250);rotate(s);for(i=0;i<999;i++){x=sin(i*m)*i+sin((f+i)/9)*9;y=cos(i*m)*i+cos((f+i)/9)*9;fill(-1);if(i%2==0)fill(0);circle(x,y,50);}}//#p5t
*/
