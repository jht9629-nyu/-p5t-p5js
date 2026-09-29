// OrthoFlower (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_22_2020/OrthoFlower/OrthoFlower.pde
// #p5t/ArtSketch/09_22_2020/OrthoFlower/OrthoFlower.pde

let f = 0,
  s = 0.1,
  n = 99;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 5000);
  linePerspective(false); // Processing P3D strokes keep a constant width
  colorMode(HSB, n);
  background(0); // clear()
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  fill((f + 50) % n, n, n, 1);
  stroke(f % n, n, n);
  f += s;
  if (f < 0 || f > 275) s *= -1;
  translate(250, 250, 0);
  rotateX((-PI + f) / 9);
  rotateY((PI + f) / 6);
  rotateZ((PI + f) / 3);
  box(f);
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_22_2020/OrthoFlower/OrthoFlower.pde
/*
float f,s=.1,n=99;

void setup(){
 size(500,500,P3D);
 ortho();
 colorMode(3,n);
 clear();
}

void draw(){
 fill((f+50)%n,n,n,1);
 stroke(f%n,n,n);
 f+=s;
 if(f<0|f>275)
  s*=-1;
 translate(250,250,0);
 rotateX((-PI+f)/9);
 rotateY((PI+f)/6);
 rotateZ((PI+f)/3);
 box(f);
}//#p5t
*/
