// BoltTunnel (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_08_2020/BoltTunnel/BoltTunnel.pde
// #p5t/ArtSketch/10_08_2020/BoltTunnel/BoltTunnel.pde

let i,
  j,
  k,
  f = 0,
  p,
  l,
  n = 240;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += f > n * 60 ? -n * 12 : 4;
  for (k = 0; k < 3; k++)
    for (j = n; j > 0; ) {
      p = n + sin(j / 9) * 50;
      l = j-- * 9 - f + k * n * 24;
      beginShape();
      for (i = 0; i < TAU; ) vertex(p + sin(i) * 480, p + cos(i++) * 480, l);
      for (; i > 0; i -= 0.6) vertex(p + sin(i) * n, p + cos(i) * n, l);
      endShape(CLOSE);
    }
}

// ---- Original Processing source: #p5t/ArtSketch/10_08_2020/BoltTunnel/BoltTunnel.pde
/*
float i,j,k,f,p,l,n=240;void setup(){size(480,480,P3D);}void draw(){f+=f>n*60?-n*12:4;for(k=0;k<3;k++)for(j=n;j>0;){p=n+sin(j/9)*50;l=j--*9-f+k*n*24;beginShape();for(i=0;i<TAU;)vertex(p+sin(i)*480,p+cos(i++)*480,l);for(;i>0;i-=.6)vertex(p+sin(i)*n,p+cos(i)*n,l);endShape(2);}}
*/
