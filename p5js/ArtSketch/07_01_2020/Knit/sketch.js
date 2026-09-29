// Knit (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_01_2020/Knit/Knit.pde
// #p5t/ArtSketch/07_01_2020/Knit/Knit.pde

let x = 0,
  y = 0,
  xs,
  ys = 10;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  xs = ys + 0.25;
  noStroke();
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  // Light positions are in Processing screen coordinates, shifted to p5's.
  pointLight(50, 100, 125, 250 - width / 2, 500 - height / 2, 0);
  pointLight(125, 50, 100, 250 - width / 2, 0 - height / 2, 0);
  translate(x, y);
  sphere(28);
  x += xs;
  y += ys;
  if (x > 500 || x < 0) xs *= -1;
  if (y > 500 || y < 0) ys *= -1;
}

// ---- Original Processing source: #p5t/ArtSketch/07_01_2020/Knit/Knit.pde
/*
float x,y,xs,ys=10;

void setup(){
  size(500,500,P3D);
  xs=ys+.25;
  noStroke();
}

void draw(){
  pointLight(50,100,125,250,500,0);
  pointLight(125,50,100,250,0,0);
  translate(x,y);
  sphere(28);
  x+=xs;
  y+=ys;
  if(x>500||x<0)
    xs*=-1;
  if(y>500||y<0)
    ys*=-1;
}
*/
