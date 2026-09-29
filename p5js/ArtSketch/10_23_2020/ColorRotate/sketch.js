// ColorRotate (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_23_2020/ColorRotate/ColorRotate.pde
// #p5t/ArtSketch/10_23_2020/ColorRotate/ColorRotate.pde

// a and b swap between white and black. The original used -1 (white as a
// Java int color) and 0; in HSB 99 those are brightness 99 and 0.
let f = 0,
  a = 99,
  b = 0,
  t,
  d = 1;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  colorMode(HSB, 99);
  strokeWeight(9);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(240, 240, f++);
  rotateY((f / 18) * d);
  rotateX((f / 18) * d);
  sphere(99, 3, 2); // sphereDetail(2): Processing's minimum is 3 x 2
  stroke(abs(f) % 99, 50, 99, 20);
  fill(a, 9);
  if (f == 310) {
    f = -300;
    t = a;
    a = b;
    b = t;
    d *= -1;
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_23_2020/ColorRotate/ColorRotate.pde
/*
int f,a=-1,b=0,t,d=1;
void setup(){size(480,480,P3D);colorMode(HSB,99);strokeWeight(9);sphereDetail(2);}
void draw(){
  translate(240,240,f++);rotateY(f/18f*d);rotateX(f/18f*d);
  sphere(99);
  stroke(abs(f)%99,50,99,20);fill(a,9);
  if(f==310){f=-300;t=a;a=b;b=t;d*=-1;}
}//#p5t
*/
