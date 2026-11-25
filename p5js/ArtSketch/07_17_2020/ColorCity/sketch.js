// https://editor.p5js.org/jht9629-nyu/sketches/s_nTD2zk1
// matt-parker-07_17-ColorCity
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_17_2020/ColorCity/ColorCity.pde
// #p5t/ArtSketch/07_17_2020/ColorCity/ColorCity.pde

// The original used frameRate(99); browsers cap draw() at ~60fps,
// so draw() runs tick() several times per frame to keep the original speed.
const STEPS_PER_FRAME = 2;

let x = 0,
  y = 0,
  a = 0,
  w = 0,
  d = 0;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  noStroke();
}

function draw() {
  for (let n = 0; n < STEPS_PER_FRAME; n++) tick();
}

// Named tick, not step: p5 2.x has a global step().
function tick() {
  if (a > w) {
    fill(r(255), r(255), r(255), 15);
    x += w;
    d = r(75);
    w = r(99);
    a = 0;
    if (x > 500) {
      x = 0;
      y += r(99);
    }
    if (y > 500) {
      y = 0;
    }
  }
  rect(x, y + d, a, 500 - y);
  a++;
}

function r(n) {
  return random(n / 5, n);
}

// ---- Original Processing source: #p5t/ArtSketch/07_17_2020/ColorCity/ColorCity.pde
/*
float x,y,a,w,d;

void setup(){
  size(500,500);noStroke();frameRate(99);}
 
void draw(){
  if(a>w){
    fill(r(255),r(255),r(255),15);x+=w;d=r(75);w=r(99);a=0;
    if(x>500){x=0;y+=r(99);}
    if(y>500){y=0;}
  }rect(x,y+d,a,500-y);a++;}

float r(float n){return random(n/5,n);};
*/
