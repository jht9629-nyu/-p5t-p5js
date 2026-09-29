// Flock (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_18_2020/Flock/Flock.pde
// #p5t/ArtSketch/09_18_2020/Flock/Flock.pde

class P {
  constructor() {
    this.x = sin(i);
    this.y = sin(this.x);
    this.u = 0;
    this.s = 0;
  }

  d() {
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 20) {
        this.s += (this.x - o.x) / 9;
        this.u += (this.y - o.y) / 9;
      }
    this.x += this.s > 5 ? log(this.s) : this.s;
    this.y += this.u > 5 ? log(this.u) : this.u;
    this.x %= i;
    this.y %= i;
    text('⋱', this.x, this.y);
  }
}

let i = 0;
let p = new Array(501);

function setup() {
  createCanvas(501, 501); // size(500, 500), then frame.setSize(i, i) with i = 501
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  while (i < 501) p[i++] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_18_2020/Flock/Flock.pde
/*
void setup(){size(500,500);}class P{float x=sin(i),y=sin(x),u,s;void d(){for(P o:p)if(dist(o.x,o.y,x,y)<20){s+=(x-o.x)/9;u+=(y-o.y)/9;}x+=s>5?log(s):s;y+=u>5?log(u):u;x%=i;y%=i;text("⋱",x,y);}};int i;P[] p=new P[501];void draw(){while(i<501)p[i++]=new P();clear();frame.setSize(i,i);for(P o:p)o.d();}//#p5t
*/
