// Blend (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_29_2020/Blend/Blend.pde
// #p5t/ArtSketch/09_29_2020/Blend/Blend.pde

class P {
  constructor() {
    this.s = random(-0.1, 0.1);
    this.u = random(-0.1, 0.1);
    this.x = 0;
    this.y = 0;
    this.i = 0;
  }

  d() {
    for (this.i = 0; this.i < 9; )
      circle(
        (this.x = this.x < 0 ? n : this.x > n ? 0 : this.x + this.s),
        (this.y = this.y < 0 ? n : this.y > n ? 0 : this.y + this.u),
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

// ---- Original Processing source: #p5t/ArtSketch/09_29_2020/Blend/Blend.pde
/*
class P{float s=random(-.1,.1),u=random(-.1,.1),x,y,i;void d(){for(i=0;i<9;)circle(x=x<0?n:x>n?0:x+s,y=y<0?n:y>n?0:y+u,i++*5);}}int j,c=240,n=480;P[] p=new P[c];void draw(){frame.setSize(n,n);noStroke();while(j<c)p[j++]=new P();fill(0,3);square(0,0,n);fill(c,2);for(P o:p)o.d();}
*/
