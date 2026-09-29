// SquareDown (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_02_2020/SquareDown/SquareDown.pde
// #p5t/ArtSketch/11_02_2020/SquareDown/SquareDown.pde

let f = 0,
  n = 1;

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
  // smooth(1) dropped: p5 always antialiases 2D shapes
  colorMode(HSB, 480); // colorMode(3, 480)
  rectMode(CENTER);
}

function draw() {
  translate(240, 240);
  rotate(f);
  stroke(f, 480, 480);
  square(0, 0, f);
  f -= n;
  if (f < 0 || f > 650) {
    n *= -1;
  }
  if (n > 0) {
    fill(0, 240);
  } else {
    fill(0, 9);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_02_2020/SquareDown/SquareDown.pde
/*
int f,n=1;

void setup() {
  size(480,480);
  smooth(1);
  colorMode(3,480);
  rectMode(CENTER);
}

void draw() {
  translate(240,240);
  rotate(f);
  stroke(f,480,480);
  square(0,0,f);
  f-=n;
  if(f<0|f>650){
    n*=-1;
  } 
  if(n>0){fill(0,240);}
  else{fill(0,9);}
}//#p5t
*/
