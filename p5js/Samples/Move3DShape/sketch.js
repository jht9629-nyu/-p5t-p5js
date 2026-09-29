// Move3DShape (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/Samples/Move3DShape/Move3DShape.pde
// #p5t/Samples/Move3DShape/Move3DShape.pde

let f = 0;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  fill(255, 1);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += f > 999 ? -999 : 9;
  if (f < 0) background(0); // clear()
  lights();
  translate(240, 240);
  rotate(f);
  box(f);
}

// ---- Original Processing source: #p5t/Samples/Move3DShape/Move3DShape.pde
/*
float f;
void setup() {
  size(480, 480, P3D);
  fill(255,1);
}
void draw() {
  f+=(f>999)?-999:9;
  if(f<0)clear();
  lights();
  translate(240, 240);
  rotate(f);
  box(f);
}
*/
