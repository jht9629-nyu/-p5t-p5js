// ColorSpiral (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_13_2020/ColorSpiral/ColorSpiral.pde
// #p5t/ArtSketch/09_13_2020/ColorSpiral/ColorSpiral.pde

let x,
  t = 0,
  a,
  m = 205;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  fill(0);
  colorMode(HSB, 99);
}

function draw() {
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(250, (x = -m));
  rotateY(t-- / 9);
  beginShape(TRIANGLE_STRIP);
  while (x < m) {
    stroke(abs(x + t / 9) % 99, m, m);
    a = x * 9 + sin(x / 2) * 15;
    vertex(sin((x += 0.1)) * m, a, cos(x) * m);
    vertex(sin(x) * 99, a, cos(x) * 99);
  }
  endShape();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_13_2020/ColorSpiral/ColorSpiral.pde
/*
float x,t,a,m=205;void setup(){size(500,500,P3D);fill(0);colorMode(3,99);}void draw(){clear();translate(250,x=-m);rotateY(t--/9);beginShape(10);while(x<m){stroke(abs(x+t/9)%99,m,m);a=x*9+sin(x/2)*15;vertex(sin(x+=.1)*m,a,cos(x)*m);vertex(sin(x)*99,a,cos(x)*99);}endShape();}//#p5t
*/
