// StainedGlassTunnel (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_22_2020/StainedGlassTunnel/StainedGlassTunnel.pde
// #p5t/ArtSketch/10_22_2020/StainedGlassTunnel/StainedGlassTunnel.pde

let t = 0,
  a,
  m = 700,
  x;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  strokeWeight(3);
  colorMode(HSB, 99);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  x = -m;
  rotateZ(t++ / 99);
  beginShape(TRIANGLE_STRIP);
  while (x < m) {
    fill(abs(x - t / 3) % 99, m, m);
    a = x * 9 + sin(x / 2) * 25;
    vertex(sin((x += 1)) * m, cos(x) * m, a);
    vertex(sin(x) * 599, cos(x) * 599 + noise(x / 99) * 30, a);
  }
  endShape();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_22_2020/StainedGlassTunnel/StainedGlassTunnel.pde
/*
float t,a,m=700,x;void setup(){size(480,480,P3D);strokeWeight(3);colorMode(3,99);}void draw(){x=-m;rotateZ(t++/99);beginShape(10);while(x<m){fill(abs(x-t/3)%99,m,m);a=x*9+sin(x/2)*25;vertex(sin(x+=1)*m,cos(x)*m,a);vertex(sin(x)*599,cos(x)*599+noise(x/99)*30,a);}endShape();}//#p5t
*/
