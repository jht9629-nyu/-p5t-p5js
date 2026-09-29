// Tired (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_15_2020/Tired/Tired.pde
// #p5t/ArtSketch/10_15_2020/Tired/Tired.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = Math.trunc(c / 9); // Java int division
    this.s = c;
  }

  d() {
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 9) {
        this.s += (this.x - o.x) / 9;
        this.u += this.y - o.y;
      }
    this.s *= 0.96;
    this.u *= 0.8;
    this.x += this.s + c;
    this.y += this.u + c;
    fill(255, this.u * c); // fill(-1, u*c)
    text(0, (this.x %= c), (this.y %= c));
  }
}

let c = 0;
let p = new Array(480);

function setup() {
  createCanvas(480, 480); // frame.setSize(c, c) in draw(); c reaches 480 on frame 1
  background(204); // Processing default background
}

function draw() {
  fill(0, 3);
  square(0, 0, c);
  while (c < 480) p[c++] = new P();
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/10_15_2020/Tired/Tired.pde
/*
class P{float x,y,u=c/9,s=c;void d(){for(P o:p)if(dist(o.x,o.y,x,y)<9){s+=(x-o.x)/9;u+=y-o.y;}s*=.96;u*=.8;x+=s+c;y+=u+c;fill(-1,u*c);text(0,x%=c,y%=c);}}int c;P[] p=new P[480];void draw(){frame.setSize(c,c);fill(0,3);square(0,0,c);while(c<480)p[c++]=new P();for(P o:p)o.d();}
*/
