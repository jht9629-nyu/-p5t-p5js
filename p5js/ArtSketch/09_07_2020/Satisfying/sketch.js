// Satisfying (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_07_2020/Satisfying/Satisfying.pde
// #p5t/ArtSketch/09_07_2020/Satisfying/Satisfying.pde

let f = 0,
  c,
  b,
  i;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  c = -PI * 25;
  noStroke();
}

function draw() {
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  lights();
  f = (f + 1) % 400;
  c += PI / 2;
  for (i = 0; i < 9; i++) {
    push();
    translate(250, f - 600 + i * 200);
    box(99);
    pop();
  }
  for (i = 0; i < 3; i++) {
    push();
    b = i % 2 < 1 ? 1 : -1;
    translate(250 + cos(c / 100) * 200 * b, 50 + i * 200);
    sphere(30);
    pop();
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_07_2020/Satisfying/Satisfying.pde
/*
float f,c=-PI*25,b,i;void setup(){size(500,500,P3D);noStroke();}void draw(){clear();lights();f=++f%400;c+=PI/2;for(i=0;i<9;i++){push();translate(250,f-600+i*200);box(99);pop();}for(i=0;i<3;i++){push();b=i%2<1?1:-1;translate(250+cos(c/100)*200*b,50+i*200);sphere(30);pop();}}//#p5t
*/
