// sketch_final (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/06_28_2020/sketch_final/sketch_final.pde
// #p5t/ArtSketch/06_28_2020/sketch_final/sketch_final.pde

let x = 0,
  m = 250;
let a = 1;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  m = 0;
}

function draw() {
  translate(250, 250);
  fill(m, 12);
  rotate(m);
  circle(x + m, x + m, m);
  circle(x - m, x + m, m);
  circle(x - m, x - m, m);
  circle(x + m, x - m, m);

  if (m > 350 || m < -225) {
    a *= -1;
  }
  m += a;
}

// ---- Original Processing source: #p5t/ArtSketch/06_28_2020/sketch_final/sketch_final.pde
/*
float x,m = 250;
int a =1;

void setup(){
  size(500,500);
  m = 0;
}

void draw(){
  translate(250,250);
  fill(m, 12);
  rotate(m);
  circle(x+m, x+m, m);
  circle(x-m, x+m, m);
  circle(x-m, x-m, m);
  circle(x+m, x-m, m);
  
  if(m > 350 || m < -225){
    a*=-1;
  }
  m+=a;
}
*/
