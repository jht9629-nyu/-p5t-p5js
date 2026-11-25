// https://editor.p5js.org/jht9629-nyu/sketches/Hb_AjaQZP
// matt-parker-07_30-portal
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_30_2020/portal/portal.pde
// #p5t/ArtSketch/07_30_2020/portal/portal.pde

let c = 250,
  x = c,
  y = c,
  a = 1,
  b = -1;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, 99);
}

function draw() {
  fill(0, 0, 99, 1);
  translate(c, c);
  rotate(x / 10);
  stroke(abs(x / 5), 50, 50);
  quad(0, -y, x, 0, 0, y, -x, 0);
  x += a;
  y += b;
  if (x == -c || y == -c) {
    a = b;
    b *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_30_2020/portal/portal.pde
/*
float c=250,x=c,y=c,a=1,b=-1;

void setup(){
  size(500,500);
  colorMode(HSB,99);
}

void draw(){
  fill(0,0,99,1);
  translate(c,c);
  rotate(x/10);
  stroke(abs(x/5),50,50);
  quad(0,-y,x,0,0,y,-x,0);
  x+=a;
  y+=b;
  if(x==-c||y==-c){
    a=b;
    b*=-1;
  }
}
*/
