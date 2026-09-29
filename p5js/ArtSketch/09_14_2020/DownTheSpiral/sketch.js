// DownTheSpiral (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_14_2020/DownTheSpiral/DownTheSpiral.pde
// #p5t/ArtSketch/09_14_2020/DownTheSpiral/DownTheSpiral.pde

let t = 0,
  a,
  m = 200,
  x;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  stroke(0, 99);
  colorMode(HSB, 99);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(250, 250);
  x = -m;
  rotateZ(t++ / 99);
  beginShape(TRIANGLE_STRIP);
  while (x < m) {
    fill(abs(x - t / 3) % 99, m, m);
    a = x * 9 + sin(x / 2) * 25;
    vertex(sin((x += 0.1)) * m, cos(x) * m, a);
    vertex(sin(x) * 99, cos(x) * 99, a);
  }
  endShape();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_14_2020/DownTheSpiral/DownTheSpiral.pde
/*
float t,a,m=200,x;void setup(){size(500,500,P3D);stroke(0,99);colorMode(3,99);}void draw(){translate(250,250);x=-m;rotateZ(t++/99);beginShape(10);while(x<m){fill(abs(x-t/3)%99,m,m);a=x*9+sin(x/2)*25;vertex(sin(x+=.1)*m,cos(x)*m,a);vertex(sin(x)*99,cos(x)*99,a);}endShape();}//#p5t
*/
