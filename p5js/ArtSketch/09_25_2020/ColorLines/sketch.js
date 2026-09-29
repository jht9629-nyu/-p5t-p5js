// ColorLines (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_25_2020/ColorLines/ColorLines.pde
// #p5t/ArtSketch/09_25_2020/ColorLines/ColorLines.pde

let x, y, f = 0, a = 2, n = 500, i;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, n);
  fill(0, 9);
  if (f % 9 < 1) rect(0, 0, 502, 502);
  if (f < 1) f = 250 * 9;
  f -= a;
  x = 250 + (sin(f / 99) * f) / 9;
  y = 250 + (cos(f / 99) * f) / 9;
  stroke(f % n, n, n, 7);
  for (i = 0; i < 6; i += 0.524) {
    stroke((f / 2 + i * (n / 9)) % n, n, n, 35);
    line(sin(i) * n + 250, cos(i) * n + 250, x, y);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/09_25_2020/ColorLines/ColorLines.pde
/*
float x,y,f,a=2,n=500,i;void draw(){frame.setSize(500, 500);colorMode(3,n);fill(0,9);if(f%9<1)rect(0,0,502,502);if(f<1)f=250*9;f-=a;x=250+sin(f/99)*f/9;y=250+cos(f/99)*f/9;stroke(f%n,n,n,7);for(i=0;i<6;i+=.524){stroke((f/2+i*(n/9))%n,n,n,35);line(sin(i)*n+250,cos(i)*n+250,x,y);}}
*/
