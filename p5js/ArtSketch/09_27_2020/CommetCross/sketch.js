// CommetCross (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_27_2020/CommetCross/CommetCross.pde
// #p5t/ArtSketch/09_27_2020/CommetCross/CommetCross.pde

class P {
  constructor() {
    this.x = 240;
    this.y = 240;
    this.s = 0;
    this.u = 0; //cos(i/9);
  }

  d() {
    for (i = 0; i < 9; ) {
      circle(this.x, this.y, i++ * 2);
      //x=+s;y+=u;
    }
  }
}

let i = 0,
  j = 0;
let p = new Array(99);

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
  noStroke();
  while (i < 99) {
    p[i++] = new P();
  }
}

function draw() {
  fill((j = 0), 3);
  square(0, 0, 480);
  fill(255, 9);
  for (const o of p) o.d();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_27_2020/CommetCross/CommetCross.pde
/*
class P{
  float x=240,y=240,s=0,u=0;//cos(i/9);
  
  void d(){
    for (i=0;i<9;) {
      circle(x,y,i++*2);
      //x=+s;y+=u;
    }
  }
}
int i,j;
P[] p=new P[99];
void setup() {
  size(480, 480);
  noStroke();
  while(i<99) {
    p[i++]=new P();
  }
}
void draw() {
  fill(j=0, 3);
  square(0, 0, 480);
  fill(255, 9);
  for(P o:p)o.d();
}//#p5t
*/
