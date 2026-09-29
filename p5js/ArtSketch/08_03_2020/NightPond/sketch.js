// NightPond (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_03_2020/NightPond/NightPond.pde
// #p5t/ArtSketch/08_03_2020/NightPond/NightPond.pde

let i = 0,
  f = 0,
  o = 50,
  x = 500,
  b = 300;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 9);
  background(4, 9, 3);
  stroke(0);
}

function draw() {
  f += 0.1;
  if (f % 9 < 0.15) i = random(x);
  fill(0, 0.3);
  rect(0, 0, x, b);
  fill(9);
  circle(o, o, o);
  push();
  noStroke(); // Processing never strokes text
  text('*', random(x), random(b));
  pop();
  fill(5, 5, 5);
  ellipse(x, x, x * 3, b);
  ellipse(i, 450, (f % 9) * 9, (f % 9) * 5);
}

// ---- Original Processing source: #p5t/ArtSketch/08_03_2020/NightPond/NightPond.pde
/*
float i,f,o=50,x=500,b=300;
void setup(){size(500,500);colorMode(HSB,9);background(4,9,3);stroke(0);}
void draw(){f+=.1;if(f%9<.15)i=random(x);fill(0,.3);rect(0,0,x,b);fill(9);circle(o,o,o);text('*',random(x),random(b));fill(5,5,5);ellipse(x,x,x*3,b);ellipse(i,450,f%9*9,f%9*5);}
*/
