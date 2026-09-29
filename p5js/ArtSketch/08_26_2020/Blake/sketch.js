// Blake (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_26_2020/Blake/Blake.pde
// #p5t/ArtSketch/08_26_2020/Blake/Blake.pde

let x,
  y,
  f = 0,
  c = 250;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  noStroke();
  colorMode(HSB, 99);
  background(0); // clear()
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f++;
  directionalLight(f % 99, 99, 99, 1, 1, -1);
  for (x = 25; x < 500; x += 50) {
    push();
    translate(x, c);
    for (y = -c; y < c; y += 50) {
      push();
      rotate(f / 40);
      translate(0, y);
      sphere(9);
      pop();
    }
    pop();
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_26_2020/Blake/Blake.pde
/*
int x,y,f,c=250;
void setup(){size(500,500,P3D);noStroke();colorMode(HSB,99);clear();}
void draw(){f++;directionalLight(f%99,99,99,1,1,-1);
for(x=25;x<500;x+=50){
push();
translate(x,c);
for(y=-c;y<c;y+=50){
push();
rotate(f/40f);
translate(0,y);
sphere(9);
pop();}pop();}}//#p5t
*/
