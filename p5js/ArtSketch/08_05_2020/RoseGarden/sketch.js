// RoseGarden (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_05_2020/RoseGarden/RoseGarden.pde
// #p5t/ArtSketch/08_05_2020/RoseGarden/RoseGarden.pde

let x = 0,
  y = 0,
  f = 0,
  d = 0,
  s = 0,
  m = 0.1,
  i = m;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  fill(125, 0, 0);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += m;
  d += i;
  stroke(255 - (f / s) * 255, 0, 0);
  translate(x, y);
  rotate(d / 10);
  sphere(s - f, 3, 2); // sphereDetail(1): Processing's minimum is 3 x 2
  if (s / 2 < f && i > 0) i *= -1;
  if (s - f < 0) {
    f = 0;
    i = m;
    s = random(70, 100);
    x = random(500);
    y = random(500);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_05_2020/RoseGarden/RoseGarden.pde
/*
float x,y,f,d,s,m=.1,i=m;
void setup(){size(500,500,P3D);
  sphereDetail(1);fill(125,0,0);}
void draw(){f+=m;d+=i;stroke(255-f/s*255,0,0);
  translate(x,y);rotate(d/10);sphere(s-f);
  if(s/2<f&i>0)i*=-1;
  if(s-f<0){f=0;i=m;s=random(70,100);x=random(500);y=random(500);}}
//#p5t
*/
