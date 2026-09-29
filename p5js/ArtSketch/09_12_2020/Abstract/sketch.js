// Abstract (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_12_2020/Abstract/Abstract.pde
// #p5t/ArtSketch/09_12_2020/Abstract/Abstract.pde

// The original used frameRate(99); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 2;

let f = 0,
  n = 500,
  m = 250,
  x = m,
  y = m,
  c = m;

function setup() {
  createCanvas(500, 500);
  noFill();
  colorMode(HSB, m);
  background(0); // clear()
  rectMode(CENTER); // rectMode(3)
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  stroke((f++ / 10) % m, m, m, 59);
  if (c == 250) {
    square(x, y, f % m);
  } else {
    circle(x, y, f % n);
  }
  if (f % c == 0) {
    c = c == m ? n : m;
    x = floor(random(n));
    y = floor(random(n));
  }
}
//#p54

// ---- Original Processing source: #p5t/ArtSketch/09_12_2020/Abstract/Abstract.pde
/*
int f,n=500,m=250,x=m,y=m,c=m;
void setup(){size(500,500);noFill();colorMode(HSB,m);clear();frameRate(99);rectMode(3);}
void draw(){
 stroke(f++/10f%m,m,m,59);
 if(c==250){square(x,y,f%m);
 }else{ circle(x,y,f%n);}
 if(f%c==0){c=c==m?n:m;x=(int)random(n);y=(int)random(n);}}//#p54
*/
