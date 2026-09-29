// Gears (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_04_2020/Gears/Gears.pde
// #p5t/ArtSketch/09_04_2020/Gears/Gears.pde

let n = 25, b, f = 0, i, c = 0, l = 98, m;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  translate(250, (m = 205));
  for (i = 0.7; i < 8; i += PI / 2) {
    if (i > 6) {
      rotate(f++ / 49);
      m = 0;
    }
    fill(i * c, l, i, c);
    beginShape();
    for (c = 0; c < 33; ) {
      n *= c++ % 2 < 1 ? 1 : -1;
      b = n + l;
      vertex(
        sin(i - f / l) * m + sin((c * PI) / 16) * b,
        cos(i - f / l) * m + cos((c * PI) / 16) * b
      );
    }
    endShape();
  }
}

// ---- Original Processing source: #p5t/ArtSketch/09_04_2020/Gears/Gears.pde
/*
float n=25,b,f,i,c,l=98,m;
void draw(){
frame.setSize(500,500);translate(250,m=205);
for(i=.7;i<8;i+=PI/2){if(i>6){rotate(f++/49);m=0;}fill(i*c,l,i,c);beginShape();for(c=0;c<33;){n*=c++%2<1?1:-1;b=n+l;vertex(sin(i-f/l)*m+sin(c*PI/16)*b,cos(i-f/l)*m+cos(c*PI/16)*b);}endShape();}}
*/
