// Cave (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_06_2020/Cave/Cave.pde
// #p5t/ArtSketch/08_06_2020/Cave/Cave.pde

let i,
  f = 0,
  m = 0.015,
  z,
  y,
  n = 99,
  p = 255;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  noStroke();
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += f < n ? m : -n;
  pointLight(p, n, 0, p - width / 2, p - height / 2, 0);
  for (y = 0; y < 10; y += 0.2) {
    for (z = 0; z < n; z++) {
      push();
      translate(
        n + sin(y) * 350 * (1 + sin(z) * 0.2) + p,
        cos(y) * 400 + noise(y, z) * n,
        z * n - f * n
      );
      sphere(n, 3, 3); // sphereDetail(3)
      pop();
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_06_2020/Cave/Cave.pde
/*
float i,f,m=.015,z,y,n=99,p=255;
void setup(){size(500,500,P3D);noStroke();sphereDetail(3);}
void draw(){f+=(f<n)?m:-n;pointLight(p,n,0,p,p,0);for(y=0;y<10;y+=.2){for(z=0;z<n;z++){push();translate(n+sin(y)*350*(1+(sin(z))*.2)+p,cos(y)*400+noise(y,z)*n,z*n-f*n);sphere(n);pop();}}}
*/
