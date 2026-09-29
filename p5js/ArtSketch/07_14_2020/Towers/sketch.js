// Towers (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_14_2020/Towers/Towers.pde
// #p5t/ArtSketch/07_14_2020/Towers/Towers.pde

// The original used frameRate(200); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 3;

let x = 0,
  y = 0,
  b = 0.098;

function setup() {
  createCanvas(500, 500);
  background(255);

  noFill();
  colorMode(HSB, 99);
  noStroke();
}

function draw() {
  for (let n = 0; n < STEPS_PER_FRAME; n++) step();
}

function step() {
  y -= b;
  text('+', x + sin(y) * 100, y);
  if (y < 0) {
    x = random(50, 450);
    y = 510;
    fill(frameCount % 99, 50, 50);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_14_2020/Towers/Towers.pde
/*
float x,y,b=.098;

void setup(){
  size(500,500);
  background(255);
  
  noFill();
  colorMode(HSB,99);
  noStroke();
  frameRate(200);
}

void draw(){
  y-=b;
  text('+',x+sin(y)*100,y);
  if(y<0){
    x=random(50,450);
    y=510;
    fill(frameCount%99,50,50);
  }
}
*/
