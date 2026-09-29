// Fleur (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_15_2020/Fleur/Fleur.pde
// #p5t/ArtSketch/08_15_2020/Fleur/Fleur.pde

class L {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = 0;
    this.s = 500;
  }
}
let l = new L();

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, 9);
  l.y++;
  l.y %= 500;
  stroke((l.y / 9) % 9, 9, 9);
  b(l);
}

function b(l) {
  if (abs(l.s + l.u) > 1) {
    rect(l.x, l.y, l.s, l.u);
    let a = new L();
    a.s = l.u / 2;
    a.u = l.s / 2;
    a.x = l.x + a.u;
    a.y = l.y + a.s;
    b(a);
    a.s *= -1;
    a.u *= -1;
    b(a);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_15_2020/Fleur/Fleur.pde
/*
class L{float x,y,u,s=500;}L l=new L();

void draw(){frame.setSize(500,500);colorMode(HSB,9);l.y++;l.y%=500;stroke(l.y/9%9,9,9);b(l);}

void b(L l){if(abs(l.s+l.u)>1){rect(l.x,l.y,l.s,l.u);L a=new L();a.s=l.u/2;a.u=l.s/2;a.x=l.x+a.u;a.y=l.y+a.s;b(a);a.s*=-1;a.u*=-1;b(a);}}
//#p5t
*/
