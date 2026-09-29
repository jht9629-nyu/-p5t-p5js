// SquishSquash (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_11_2020/SquishSquash/SquishSquash.pde
// #p5t/ArtSketch/07_11_2020/SquishSquash/SquishSquash.pde

let f = 10;
let a,
  b = 10;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  colorMode(HSB, 99);
  a = -2000;
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += 0.5;
  a -= b;
  for (let i = 98; i > -1; i--) {
    fill((f / 10) % 99, 99, 75);
    ellipse(250, 250, 10 * i + a, 10 * i);
  }
  if (a < -2000 || a > 2000) {
    b *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_11_2020/SquishSquash/SquishSquash.pde
/*
float f=10;
int a,b=10;

public void setup(){
  size(500,500,P3D);
  colorMode(HSB,99);
  a=-2000;
}
  
public void draw(){
  f+=.5f;
  a-=b;
  for (int i=98;i>-1;i--){
    fill((f/10f)%99,99,75);
    ellipse(250,250,10*i+a,10*i);
  }
  if(a<-2000||a>2000){
    b*=-1;
  }
}
*/
