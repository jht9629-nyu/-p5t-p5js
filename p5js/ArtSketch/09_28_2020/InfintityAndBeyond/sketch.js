// InfintityAndBeyond (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_28_2020/InfintityAndBeyond/InfintityAndBeyond.pde
// #p5t/ArtSketch/09_28_2020/InfintityAndBeyond/InfintityAndBeyond.pde

class P {
  constructor() {
    this.s = random(-0.1, 0.1);
    this.u = random(-0.1, 0.1);
    this.x = c;
    this.y = c;
    this.i = 0;
  }

  d() {
    for (this.i = 0; this.i < 9; )
      circle(
        (this.x =
          this.x < 0 ? (this.x = n) : this.x > n ? (this.x = 0) : this.x + this.s),
        (this.y =
          this.y < 0 ? (this.y = n) : this.y > n ? (this.y = 0) : this.y + this.u),
        this.i++ * 5
      );
  }
}

let j = 0,
  c = 240,
  n = 480;
let p = new Array(c);

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  noStroke();
  while (j < c) p[j++] = new P();
  fill(0, 3);
  square(0, 0, n);
  fill(c, 2);
  for (const o of p) o.d();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_28_2020/InfintityAndBeyond/InfintityAndBeyond.pde
/*
class P {
  float s=random(-.1,.1), u=random(-.1,.1), x=c, y=c, i;
  void d() {
    for (i=0; i<9; )circle(x=x<0?x=n:x>n?x=0:x+s,y=y<0?y=n:y>n?y=0:y+u,i++*5);
  }
}

int j, c=240, n=480;
P[] p=new P[c];
void draw() {
  frame.setSize(n, n);
  noStroke();
  while (j<c)p[j++]=new P();
  fill(0, 3);
  square(0, 0, n);
  fill(c, 2);
  for (P o:p)o.d();
}//#p5t
*/
