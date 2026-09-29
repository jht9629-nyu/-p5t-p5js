// OpenAir (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_16_2020/OpenAir/OpenAir.pde
// #p5t/ArtSketch/11_16_2020/OpenAir/OpenAir.pde

let s = 240,
  x = 0,
  i;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 5000);
  linePerspective(false); // Processing P3D strokes keep a constant width
}

function draw() {
  background('#1B4254');
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  x += x > s ? -s * 2 : 4;
  lights();
  translate(s, s);
  rotateX((PI * 3) / 4);
  rotateY(PI / 4);
  fill(255); // fill(-1)
  box(s + 1);
  translate(x + s, (i = 0));
  fill('#50B4E1');
  box(s, 9, s);
  for (; i++ < 3; ) {
    translate(s * -2, 0);
    fill('#BE5B52');
    box(s, 9, s);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_16_2020/OpenAir/OpenAir.pde
/*
int s=240,x,i;void setup(){size(480,480,P3D);ortho();}void draw(){background(#1B4254);x+=x>s?-s*2:4;lights();translate(s,s);rotateX(PI*3/4);rotateY(PI/4);fill(-1);box(s+1);translate(x+s,i=0);fill(#50B4E1);box(s,9,s);for(;i++<3;){translate(s*-2,0);fill(#BE5B52);box(s,9,s);}}//#p5t
*/
