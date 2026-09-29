// Fans (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_18_2020/Fans/Fans.pde
// #p5t/ArtSketch/07_18_2020/Fans/Fans.pde

let f = 0,
  x = 0,
  y = 0,
  q = 0,
  w = 0,
  a = 0,
  d = 0.1;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(0); // clear()
  colorMode(HSB, 9);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f++;
  if (f % 10 == 0) {
    fill(0, 0.5);
    rect(-1, -1, 509, 509);
  }
  q = sin(a) * 99 + x;
  w = cos(a) * 99 + y;
  line(x, y, q, w);
  a += d;
  if (a >= PI || a < -PI) {
    stroke(random(9), 9, 9);
    x = q;
    y = w;
    a = 0;
    d *= -1;
    if (y < 0) {
      x = random(500);
      y = 500;
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_18_2020/Fans/Fans.pde
/*
float f,x,y,q,w,a,d=.1;

void setup(){size(500,500,P3D);clear();colorMode(HSB,9);}

void draw(){f++;if (f%10==0){fill(0,.5);rect(-1,-1,509,509);}q=sin(a)*99+x;w=cos(a)*99+y;line(x,y,q,w);a+=d;if(a>=PI||a<-PI){stroke(random(9),9,9);x=q;y=w;a=0;d*=-1;if(y<0){x=random(500);y=500;}}}
*/
