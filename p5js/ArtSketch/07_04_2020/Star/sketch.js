// Star (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_04_2020/Star/Star.pde
// #p5t/ArtSketch/07_04_2020/Star/Star.pde

let x = 0,
  c = 0,
  z = 0.1;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
}

function draw() {
  fill(c, 0, 255 - c, 2);
  square(-1, -1, 510);
  fill(255 - c, 0, c);
  x += 0.01;
  c += z;
  translate(250, 250);
  rotate(x);
  translate(100, 100);
  rotate(x * 100);
  translate(-50, -50);
  rect(0, 0, 10, 10);
  if (c >= 255 || c < 0) {
    z *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_04_2020/Star/Star.pde
/*
float x,c,z=0.1;

void setup(){
 size(500,500);}

void draw(){
  fill(c,0,255-c,2);
  square(-1,-1,510);
  fill(255-c,0,c);
  x+=.01;c+=z;
  translate(250,250);
  rotate(x);
  translate(100,100);
  rotate(x*100);
  translate(-50,-50);
  rect(0,0,10,10);
  if(c>=255||c<0){z*=-1;}}
*/
