// Spiral (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_24_2020/Spiral/Spiral.pde
// #p5t/ArtSketch/07_24_2020/Spiral/Spiral.pde

let x = 0,
  y = 0,
  f = 0,
  a = 0.2;

function setup() {
  createCanvas(500, 500);
  noFill();
  background(0); // clear()
  colorMode(HSB, 99);
}

function draw() {
  f += a;
  x = 250 + sin(f / 9) * f;
  y = 250 + cos(f / 9) * f;
  stroke(f % 99, 99, 50, 5);
  triangle(0, 0, x, y, 0, 500);
  triangle(0, 500, x, y, 500, 500);
  triangle(0, 0, x, y, 500, 0);
  triangle(500, 0, x, y, 500, 500);
  if (f > 300 || f < 0) {
    a *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_24_2020/Spiral/Spiral.pde
/*
float x,y,f,a=.2;void setup(){size(500,500);noFill();clear();colorMode(HSB,99);}
void draw(){f+=a;x=250+sin(f/9)*f;y=250+cos(f/9)*f;stroke(f%99,99,50,5);triangle(0,0,x,y,0,500);triangle(0,500,x,y,500,500);triangle(0,0,x,y,500,0);triangle(500,0,x,y,500,500);if(f>300||f<0){a*=-1;}}
*/
