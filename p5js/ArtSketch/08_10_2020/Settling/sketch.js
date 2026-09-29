// Settling (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_10_2020/Settling/Settling.pde
// #p5t/ArtSketch/08_10_2020/Settling/Settling.pde

let f = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 9);
  noStroke();
  background(0); // clear()
}

function draw() {
  f++;
  fill((f / 20) % 9, 9, 9);
  translate(250, 250);
  rotate(f / 99);
  b(0, 0, 100);
}

function b(x, y, f) {
  if (abs(f) > 1) {
    rect(x, y, f, f);
    rect(x, y, -f, -f);
    b(x + f, y - f, f / 2);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_10_2020/Settling/Settling.pde
/*
float f;
void setup(){
  size(500,500);
  colorMode(HSB,9);noStroke();clear();
}
void draw(){f++;
  fill(f/20%9,9,9);
  translate(250,250);
  rotate(f/99);
  b(0,0,100);
}
void b(float x,float y,float f){
  if(abs(f)>1){
  rect(x,y,f,f);rect(x,y,-f,-f);
  b(x+f,y-f,f/2);}}
//#p5t
*/
