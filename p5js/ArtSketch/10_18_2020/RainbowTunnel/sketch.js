// RainbowTunnel (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_18_2020/RainbowTunnel/RainbowTunnel.pde
// #p5t/ArtSketch/10_18_2020/RainbowTunnel/RainbowTunnel.pde

let t = 0,
  a,
  m = 240,
  x,
  n = 99,
  k,
  l;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  noStroke();
  colorMode(HSB, n);
  background(0); // clear()
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  translate(n, n);
  x = -m;
  rotateZ((++t * 9) / n);
  beginShape(TRIANGLE_STRIP);
  while (x < m) {
    fill(abs(x - t) % n, n, n, 9);
    vertex((k = sin(x) * m), (l = cos(x) * m), (a = x * 9 + sin(x / 2) * 25));
    vertex(k, l, a + 9);
    x += 0.1;
  }
  endShape();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_18_2020/RainbowTunnel/RainbowTunnel.pde
/*
float t,a,m=240,x,n=99,k,l;void setup(){size(480,480,P3D);noStroke();colorMode(3,n);clear();}void draw(){translate(n,n);x=-m;rotateZ(++t*9/n);beginShape(10);while(x<m){fill(abs(x-t)%n,n,n,9);vertex(k=sin(x)*m,l=cos(x)*m,a=x*9+sin(x/2)*25);vertex(k,l,a+9);x+=.1;}endShape();}//#p5t
*/
