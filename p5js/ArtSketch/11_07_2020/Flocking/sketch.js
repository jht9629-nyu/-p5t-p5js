// Flocking (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_07_2020/Flocking/Flocking.pde
// #p5t/ArtSketch/11_07_2020/Flocking/Flocking.pde

class P {
  constructor() {
    this.x = i;
    this.y = 0;
    this.a = i;
    this.e = 0; // the Java field d, renamed: JS can't share it with the method d()
  }

  d() {
    for (const o of p) {
      this.e = dist(o.x, o.y, this.x, this.y);
      if (this.e < 25 && o != this) this.a--;
      if (this.e > 50) this.a = lerp(this.a, atan2(o.y - this.y, o.x - this.x), 0.01);
    }
    this.x += sin(this.a) + n;
    this.y += cos(this.a) + n;
    text(8, (this.x %= n), (this.y %= n));
  }
}

let i = 0,
  n = 480;
let p = new Array(n);

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  background(0); // clear()
  while (i < n) p[i++] = new P();
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/11_07_2020/Flocking/Flocking.pde
/*
class P{float x=i,y,a=i,d;void d(){for(P o:p){d=dist(o.x,o.y,x,y);if(d<25&o!=this)a--;if(d>50)a=lerp(a,atan2(o.y-y,o.x-x),.01);}x+=sin(a)+n;y+=cos(a)+n;text(8,x%=n,y%=n);}}int i,n=480;P[]p=new P[n];void draw(){clear();while(i<n)p[i++]=new P();frame.setSize(n,n);for(P o:p)o.d();}
*/
