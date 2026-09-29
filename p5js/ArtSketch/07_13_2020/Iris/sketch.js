// Iris (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_13_2020/Iris/Iris.pde
// #p5t/ArtSketch/07_13_2020/Iris/Iris.pde

let f = 0,
  x = 0,
  y = 0;

function setup() {
  createCanvas(500, 500);
  background(255);

  noFill();
  colorMode(HSB, 99);
}

function draw() {
  f += 0.1;

  translate(250, 250);
  rotate(f / 9);

  x = sin(f) * 99 + 150 * cos(f * 3);
  y = cos(f) * 99 + 150 * sin(f * 3);
  stroke(f % 99, 50, 50, 9);
  triangle(x, y, -99, 0, 50, 0);
}

// ---- Original Processing source: #p5t/ArtSketch/07_13_2020/Iris/Iris.pde
/*
float f,x,y;

void setup(){
  size(500,500);
  background(255);
  
  noFill();
  colorMode(HSB,99);
}

void draw(){
  f+=.1;
  
  translate(250,250);
  rotate(f/9f);
  
  x=sin(f)*99+150*cos(f*3);
  y=cos(f)*99+150*sin(f*3);
  stroke(f%99,50,50,9);
  triangle(x,y,-99,0,50,0);
}
*/
