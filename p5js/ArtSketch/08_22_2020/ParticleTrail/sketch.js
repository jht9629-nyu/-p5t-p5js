// ParticleTrail (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_22_2020/ParticleTrail/ParticleTrail.pde
// #p5t/ArtSketch/08_22_2020/ParticleTrail/ParticleTrail.pde

let c = 250,
  i = 0;

class P {
  constructor() {
    this.l = 0;
    this.x = 0;
    this.y = 0;
    this.u = 0;
    this.s = 0;
    this.f = 0;
  }

  d() {
    this.f++;
    this.l -= random(9);
    this.x += this.s;
    this.y += this.u;
    this.u += 0.1;
    fill(c, this.l);
    text('*', this.x, this.y);
    if (this.l < 1) {
      this.l = c;
      this.s = sin(this.u);
      this.u /= -2;
      this.x = sin(this.f / 15) * c + c;
      this.y = cos(this.f / 20) * 200 + c;
    }
  }
}
let p = new Array(c * 9);

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
}

function draw() {
  for (; i < c * 9; i++) p[i] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_22_2020/ParticleTrail/ParticleTrail.pde
/*
int c=250,i;class P{float l,x,y,u,s,f;void d(){f++;l-=random(9);x+=s;y+=u;u+=.1;fill(c,l);text('*',x,y);if(l<1){l=c;s=sin(u);u/=-2;x=sin(f/15)*c+c;y=cos(f/20)*200+c;}}};P[] p=new P[c*9];void draw(){frame.setSize(500,500);for(;i<c*9;i++)p[i]=new P();clear();for(P o:p)o.d();}//#p5t
*/
