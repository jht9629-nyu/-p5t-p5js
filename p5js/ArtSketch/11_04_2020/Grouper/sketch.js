// Grouper (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_04_2020/Grouper/Grouper.pde
// #p5t/ArtSketch/11_04_2020/Grouper/Grouper.pde

class P {
  constructor() {
    this.x = sin(c) * c;
    this.y = random(l);
    this.a = 0;
    this.f = null;
  }

  d() {
    for (const o of p) this.f = dist(o.x, o.y, this.x, this.y) < 9 && o != this ? o : this.f;
    this.a = this.f == null ? cos(this.y) : this.f.a;
    text(0, (this.x += sin(this.a)), (this.y += cos(this.a)));
    this.x += l;
    this.y += l;
    this.x %= 480;
    this.y %= 480;
  }
}

let c = 0,
  l = 480;
let p = new Array(l);

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  while (c < l) p[c++] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/11_04_2020/Grouper/Grouper.pde
/*
class P{float x=sin(c)*c,y=random(l),a;P f;void d(){for(P o:p)f=dist(o.x,o.y,x,y)<9&o!=this?o:f;a=f==null?cos(y):f.a;text(0,x+=sin(a),y+=cos(a));x+=l;y+=l;x%=480;y%=480;}}int c,l=480;P[]p=new P[l];void draw(){frame.setSize(l,l);while(c<l)p[c++]=new P();clear();for(P o:p)o.d();}
*/
