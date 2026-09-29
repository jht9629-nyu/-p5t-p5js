// sketch_200718a (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_19_2020/sketch_200718a/sketch_200718a.pde
// #p5t/ArtSketch/07_19_2020/sketch_200718a/sketch_200718a.pde

let x = 0,
  y = 0,
  q = 0,
  w = 0,
  a = 0,
  f = 0,
  l = 20;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, 99);
}

function draw() {
  f++;
  if (f % 9 == 0) {
    fill(0, 9);
    rect(-1, -1, 550, 550);
  }
  q = sin(a) * l + x;
  w = cos(a) * l + y;
  a += w;
  line(x, y, q, w);
  if (a > PI) {
    stroke(random(99), 99, 99);
    let tries = 0;
    while (q > 500 || w > 500 || q < 0 || w < 0) {
      a += w;
      // Guard: a can lock into a cycle (a += -4*PI keeps cos(a) fixed) and
      // loop forever. The Java original freezes the same way, only later.
      if (++tries > 1000) {
        a = random(TWO_PI);
        tries = 0;
      }
      q = sin(a) * l + x;
      w = cos(a) * l + y;
    }
    x = q;
    y = w;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_19_2020/sketch_200718a/sketch_200718a.pde
/*
float x,y,q,w,a,f,l=20;
void setup(){size(500,500);colorMode(HSB,99);}
void draw(){f++;if(f%9==0){fill(0,9);rect(-1,-1,550,550);}
  q=sin(a)*l+x;w=cos(a)*l+y;a+=w;line(x,y,q,w);if(a>PI){stroke(random(99),99,99);while(q>500|w>500|q<0|w<0){a+=w;q=sin(a)*l+x;w=cos(a)*l+y;}x=q;y=w;}}
*/
