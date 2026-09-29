// TriRot (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_25_2020/TriRot/TriRot.pde
// #p5t/ArtSketch/07_25_2020/TriRot/TriRot.pde

let f = 0,
  a = 2;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(0); // clear()
  colorMode(HSB, 99);
  fill(f, 0, 0, 5);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f -= a;
  stroke((f * -0.1) % 99, 99, 50);

  translate(250, 250, f);
  rotate(f / 100);
  triangle(-500, 500, 0, -500, 500, 500);

  if (f < -3800 || f > 0) {
    a *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_25_2020/TriRot/TriRot.pde
/*
float f,a=2;

void setup(){
  size(500,500,P3D);
  clear();
  colorMode(HSB,99);
  fill(f,0,0,5);
}

void draw(){
  f-=a;
  stroke(f*-.1%99,99,50);

  translate(250,250,f);
  rotate(f/100);
  triangle(-500,500,0,-500,500,500);

  if(f<-3800||f>0){
    a*=-1;
  }
}
*/
