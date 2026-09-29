// Crowd (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_21_2020/Crowd/Crowd.pde
// #p5t/ArtSketch/09_21_2020/Crowd/Crowd.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = i;
    this.s = Math.trunc(i / 9); // Java int division
  }

  d() {
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 23) {
        n++;
        this.s += (this.x - o.x) / 7;
        this.u += (this.y - o.y) / 7;
      }
    fill(0, (n - 1) * c, c);
    this.x += this.s / n + c;
    this.y += this.u / n + c;
    text(8, (this.x %= c), (this.y %= c));
    this.s = this.u = n = 0;
  }
}

let i = 0,
  c = 500,
  n = 0;
let p = new Array(c);

function setup() {
  createCanvas(500, 500);
}

function draw() {
  while (i < c) p[i++] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/09_21_2020/Crowd/Crowd.pde
/*
void setup(){size(500,500);}class P{float x,y,u=i,s=i/9;void d(){for(P o:p)if(dist(o.x,o.y,x,y)<23){n++;s+=(x-o.x)/7;u+=(y-o.y)/7;}fill(0,(n-1)*c,c);x+=s/n+c;y+=u/n+c;text(8,x%=c,y%=c);s=u=n=0;}};int i,c=500,n;P[] p=new P[c];void draw(){frame.setSize(c,c);while(i<c)p[i++]=new P();clear();for(P o:p)o.d();}
*/
