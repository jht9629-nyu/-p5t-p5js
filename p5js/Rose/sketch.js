// Rose (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/Rose/Rose.pde
// #p5t/Rose/Rose.pde

let a = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(300, 300);
  strokeWeight(3);
  rotateY(cos(a));
  stroke(229, 0, 54, 20);
  rotateZ(sin(a));
  fill(1, 150);
  box(200 - a * 10);
  a += 0.005;
  if (a > 20) {
    a = 20;
  }
}

// ---- Original Processing source: #p5t/Rose/Rose.pde
/*
float a=0;
void setup() {
  size(600, 600, P3D);
}
void draw() {
  translate(300, 300);
  strokeWeight(3);
  rotateY(cos(a));
  stroke(229, 0, 54, 20);
  rotateZ(sin(a));
  fill(1, 150);
  box(200-a*10);
  a+=0.005;
  if (a>20) {
    a=20;
  }
}
*/
