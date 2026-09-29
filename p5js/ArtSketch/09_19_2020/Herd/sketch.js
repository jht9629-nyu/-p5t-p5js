// Herd (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_19_2020/Herd/Herd.pde
// #p5t/ArtSketch/09_19_2020/Herd/Herd.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = 0;
    this.s = 0;
  }

  d() {
    this.s = this.u = 0.2;
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 9) {
        this.s += (this.x - o.x) / 4;
        this.u += (this.y - o.y) / 4;
      }
    this.x += this.s < 0.1 ? random(2) : this.s;
    this.y += this.u < 0.1 ? random(2) : this.u;
    this.x %= c;
    this.y %= c;
    text('%', this.x, this.y);
  }
}

let i = 0,
  c = 500;
let p = new Array(c);

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  while (i < c) p[i++] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_19_2020/Herd/Herd.pde
/*
class P{float x,y,u,s;void d(){s=u=.2;for(P o:p)if(dist(o.x,o.y,x,y)<9){s+=(x-o.x)/4;u+=(y-o.y)/4;}x+=s<.1?random(2):s;y+=u<.1?random(2):u;x%=c;y%=c;text("%",x,y);}};int i,c=500;P[] p=new P[c];void draw(){frame.setSize(c,c);while(i<c)p[i++]=new P();clear();for(P o:p)o.d();}//#p5t
*/
