// ColorPortal (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_29_2020/ColorPortal/ColorPortal.pde
// #p5t/ArtSketch/10_29_2020/ColorPortal/ColorPortal.pde

let f = 0,
  c = 0,
  i;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  frustum(-25, 25, -25, 25, 43, 9330);
  linePerspective(false); // Processing P3D strokes keep a constant width
  colorMode(HSB, 99);
  noFill();
}

function draw() {
  f -= i = 0.1;
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (; i++ < 2000; ) {
    stroke(sin((i + f * 9) / 299) * 45 + 50, 99, 99, 39);
    push();
    translate(noise(c) * 99, cos(-c) * 50, 30 * (i - 999));
    c = (i + f) / 9;
    circle(0, 0, 800);
    pop();
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_29_2020/ColorPortal/ColorPortal.pde
/*
float f,c,i;
void setup(){size(480,480,P3D);
frustum(-25,25,-25,25,43,9330);
colorMode(3,99);
noFill();}

void draw(){f-=i=.1;
  clear();
  for(;i++<2000;){
    stroke(sin((i+f*9)/299)*45+50,99,99,39);
    push();
    translate(noise(c)*99,cos(-c)*50,30*(i-999));
    c=(i+f)/9;circle(0,0,800);
    pop();
  }
}//#p5t
*/
