// CaveExplorers (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_06_2020/CaveExplorers/CaveExplorers.pde
// #p5t/ArtSketch/11_06_2020/CaveExplorers/CaveExplorers.pde

class P {
  constructor() {
    this.a = c;
    this.q = 0;
    this.w = 0;
  }

  d() {
    text(
      (x = 0), // resets x, so the cave below is redrawn every frame
      (this.q = sin(this.a) + ((this.q + c) % c)),
      (this.w =
        cos((this.a += jred(jget(Math.trunc(this.q), Math.trunc(this.w))) > 0 ? 1 : 0)) +
        ((this.w + c) % c))
    );
  }
}

let x = 0,
  y,
  c = 0;
let p = new Array(480);

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480); // frame.setSize(c, c) in draw()
  background(204); // Processing default background
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  // color(gray) * c is Java int multiplication of a packed color.
  for (; x++ < c && c > 0; )
    for (y = 0; y++ < c; ) jset(x, y, Math.imul(jcolor(noise(x / 99, y / 99) * 2), c));
  while (c < 480) p[c++] = new P();
  for (const o of p) o.d();
}

// ---- Original Processing source: #p5t/ArtSketch/11_06_2020/CaveExplorers/CaveExplorers.pde
/*
class P{float a=c,q,w;void d(){text(x=0,q=sin(a)+(q+c)%c,w=cos(a+=red(get(int(q),int(w)))>0?1:0)+(w+c)%c);}}int x,y,c;P[]p=new P[480];void draw(){for(;x++<c&c>0;)for(y=0;y++<c;)set(x,y,color(noise(x/99f,y/99f)*2)*c);while(c<480)p[c++]=new P();for(P o:p)o.d();frame.setSize(c,c);}
*/
