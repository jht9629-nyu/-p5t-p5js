// krispr (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_09_2020/krispr/krispr.pde
// #p5t/ArtSketch/11_09_2020/krispr/krispr.pde

let f = 0,
  i,
  j,
  n = 99,
  b;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  noStroke();
  colorMode(HSB, n);
}

function draw() {
  f += 0.1;
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  lights();
  translate(240, (i = 0));
  for (; i++ < n; ) {
    push();
    b = i + f;
    for (j = 0; j++ < 9; ) {
      translate(0, i * 5);
      rotateY(b / 9);
      fill(b % n, n, n);
      box(9);
      translate(40 + j * 5, 0);
      fill((b * 2) % n, n, n);
      box(n, 2, 2);
    }
    pop();
  }
}

// ---- Original Processing source: #p5t/ArtSketch/11_09_2020/krispr/krispr.pde
/*
float f,i,j,n=99,b;void setup(){size(480,480,P3D);noStroke();colorMode(3,n);}void draw(){f+=.1;clear();lights();translate(240,i=0);for(;i++<n;){push();b=i+f;for(j=0;j++<9;){translate(0,i*5);rotateY(b/9);fill(b%n,n,n);box(9);translate(40+j*5,0);fill(b*2%n,n,n);box(n,2,2);}pop();}}
*/
