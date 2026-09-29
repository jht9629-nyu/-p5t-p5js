// RedStar (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_04_2020/RedStar/RedStar.pde
// #p5t/ArtSketch/10_04_2020/RedStar/RedStar.pde

let f = 0, z, d = 0.2;
let i, n = 480, b = 240;
let a = [0, 0, n, 0, n, n, 0, n, 0, b, b, 0, n, b, b, n, 0, b];

function setup() {
  createCanvas(480, 480); // size(500, 500), then frame.setSize(480, 480)
  background(204); // Processing default background
}

function draw() {
  fill((i = 0), 9);
  square(0, 0, n);
  f += d;
  d *= f > b / 2 || f < 0 ? -1 : 1;
  stroke(b, 0, 0, 99);
  while (i < 8) {
    z = ((i + 1) * PI) / 2 + f;
    line(a[i * 2], a[i * 2 + 1], b + sin((i * PI) / 2 + f) * f, b + cos((PI * i++) / 2 + f) * f);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_04_2020/RedStar/RedStar.pde
/*
float f,z,d=.2;void setup(){size(500,500);}
int i,n=480,b=240;
float[] a={0,0,n,0,n,n,0,n,0,b,b,0,n,b,b,n,0,b};
void draw(){fill(i=0,9);square(0,0,n);frame.setSize(n,n);f+=d;d*=f>b/2|f<0?-1:1;stroke(b,0,0,99);while(i<8){z=(i+1)*PI/2+f;line(a[i*2],a[i*2+1],b+sin(i*PI/2+f)*f, b+cos(PI*i++/2+f)*f);}}//#p5t
*/
