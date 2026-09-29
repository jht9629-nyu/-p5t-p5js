// sketch_200701a (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_02_2020/sketch_200701a/sketch_200701a.pde
// #p5t/ArtSketch/07_02_2020/sketch_200701a/sketch_200701a.pde

// The original used frameRate(1250); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 20;

let w = 0,
  x = 0,
  y = 0,
  a = 0,
  b = 0;
let c,
  o = 250;

function setup() {
  createCanvas(500, 500);
  noStroke();
  background(0); // clear()
  c = o;
}

function draw() {
  for (let n = 0; n < STEPS_PER_FRAME; n++) step();
}

function step() {
  w += 0.5;
  x += 0.1;
  y += 0.1;
  a = sin(x) * w + o;
  b = cos(y) * w + o;
  fill(0, 9);
  circle(a, b, 30);
  fill(c);
  circle(a, b, 2);
  if (w > 350) {
    c = color(random(o), random(o), random(99, o));
    x++;
    w = 0;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_02_2020/sketch_200701a/sketch_200701a.pde
/*
float w,x,y,a,b;int c,o=250;
void setup(){
  size(500,500);frameRate(o*5);noStroke();clear();c=o;}
void draw(){
  w+=.5;x+=.1;y+=.1;
  a=sin(x)*w+o;b=cos(y)*w+o;
  fill(0,9);circle(a,b,30);
  fill(c);circle(a,b,2);
  if(w>350){c=color(random(o),random(o),random(99,o));x++;w=0;}}
*/
