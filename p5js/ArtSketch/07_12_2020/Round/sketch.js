// Round (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_12_2020/Round/Round.pde
// #p5t/ArtSketch/07_12_2020/Round/Round.pde

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  colorMode(HSB, 99);
  frameRate(5);
  rectMode(CENTER);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(250, 250);
  rotate(frameCount * 20);
  fill(frameCount % 99, 99, 50, 10);
  stroke(50 - (frameCount % 99), 99, 99, 10);
  box(1000, 50, 30);
}

// ---- Original Processing source: #p5t/ArtSketch/07_12_2020/Round/Round.pde
/*
float x,y,a=.5;
int[] p;

public void setup(){
  size (500,500,P3D);
  colorMode(HSB,99);
  frameRate(5);
  rectMode(CENTER);
}
  
public void draw(){
  translate (250,250);
  rotate(frameCount*20);
  fill (frameCount%99,99,50,10);
  stroke (50-frameCount%99,99,99,10);
  box(1000,50,30);
}
*/
