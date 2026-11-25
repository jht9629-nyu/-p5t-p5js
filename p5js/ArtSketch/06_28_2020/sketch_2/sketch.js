// https://editor.p5js.org/jht9629-nyu/sketches/KitwPp777
// matt-parker-06_28-sketch_2
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/06_28_2020/sketch_2/sketch_2.pde
// #p5t/ArtSketch/06_28_2020/sketch_2/sketch_2.pde

//Final 6.28.20

let x = 0,
  m = 250;
let a = 1;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  m = 0;
}

function draw() {
  fill(m, 12);
  rotate(m);
  circle(x + m, x + m, m);
  circle(x - m, x + m, m);
  circle(x - m, x - m, m);
  circle(x + m, x - m, m);

  if (m > 800 || m < -500) {
    a *= -1;
  }
  m += a;
}

// ---- Original Processing source: #p5t/ArtSketch/06_28_2020/sketch_2/sketch_2.pde
/*
//Final 6.28.20

float x,m = 250;
float a = 1;

void setup(){
  size(500, 500);
  m = 0;
}

void draw(){
  fill(m, 12);
  rotate(m);
  circle(x+m, x+m, m);
  circle(x-m, x+m, m);
  circle(x-m, x-m, m);
  circle(x+m, x-m, m);
  
  if(m > 800 || m < -500){
    a*=-1;
  }
  m+=a;
}
*/
