// Bez (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_26_2020/Bez/Bez.pde
// #p5t/ArtSketch/07_26_2020/Bez/Bez.pde

let f = 0,
  x = 0,
  y = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(0); // clear()
  stroke(255, 20);
  colorMode(HSB, 99);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += 0.01;
  f = f % 40;
  fill((f * 5) % 99, 50, 99, 2);
  x = sin(f) * f * 10;
  y = cos(f) * f * 10;
  line(250, 100, 250 - x, 100 + y);
  line(250, 400, 250 + x, 400 + y);
  bezier(250, 100, 250 - x, 100 + y, 250 + x, 400 + y, 250, 400);
}

// ---- Original Processing source: #p5t/ArtSketch/07_26_2020/Bez/Bez.pde
/*
float f,x,y;
void setup(){
  size(500, 500, P3D);clear();stroke(255,20);colorMode(HSB,99);}
void draw(){f+=.01;f=f%40;
  fill(f*5%99,50,99,2);
  x=sin(f)*f*10;y=cos(f)*f*10;
  line(250,100,250-x,100+y);line(250,400,250+x,400+y);
  bezier(250,100,250-x,100+y,250+x,400+y,250,400);}
*/
