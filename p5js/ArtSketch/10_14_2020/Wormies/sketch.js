// Wormies (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_14_2020/Wormies/Wormies.pde
// #p5t/ArtSketch/10_14_2020/Wormies/Wormies.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = i % 9;
    this.s = i;
  }

  d() {
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 9) {
        this.s += (this.x - o.x) / 9;
        this.u += (this.y - o.y) / 9;
      }
    this.s *= 0.98;
    this.u *= 0.98;
    this.x += this.s + c;
    this.y += this.u + c;
    text(8, (this.x %= c), (this.y %= c));
  }
}

let i = 0,
  c = 480;
let p = new Array(c);

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  fill(255, 3); // fill(-1, 3)
  square(0, 0, c);
  fill(0);
  while (i < c) p[i++] = new P();
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/10_14_2020/Wormies/Wormies.pde
/*
class P{float x,y,u=i%9,s=i;void d(){for(P o:p)if(dist(o.x,o.y,x,y)<9){s+=(x-o.x)/9;u+=(y-o.y)/9;}s*=.98;u*=.98;x+=s+c;y+=u+c;text(8,x%=c,y%=c);}};int i,c=480;P[] p=new P[c];void draw(){frame.setSize(c,c);fill(-1,3);square(0,0,c);fill(0);while(i<c)p[i++]=new P();for(P o:p)o.d();}
*/
