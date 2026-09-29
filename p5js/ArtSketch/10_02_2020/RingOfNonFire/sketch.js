// RingOfNonFire (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_02_2020/RingOfNonFire/RingOfNonFire.pde
// #p5t/ArtSketch/10_02_2020/RingOfNonFire/RingOfNonFire.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
let p = new P(),
  o = new P();
let f = 0;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  //f+=.1;
  fill(255, 9);
  rect(0, 0, 480, 480);
  noFill();

  //quad(0,0,480,0,250,400,400, 400);

  //

  //for(int i=0; i<3; i++){
  d(f);
  quad(0, 0, 480, 0, p.x, p.y, o.x, o.y);
  d(f + 1);
  quad(0, 0, 480, 0, p.x, p.y, o.x, o.y);
  d(f + 2);
  quad(0, 0, 480, 0, p.x, p.y, o.x, o.y);
  d(f + 3);
  quad(0, 0, 480, 0, p.x, p.y, o.x, o.y);
  //quad(0,0,480,0,240,240,140,240);
  //d(i);quad(480,0,480,480,p.x,p.y,o.x,o.y);
  //d(i);quad(480,480,0,480,p.x,p.y,o.x,o.y);
  //d(i);quad(0,480,0,0,p.x,p.y,o.x,o.y);
  //}

  // println(o.x + "x" + o.y); dropped: it only logged to the console each frame
}

function d(w) {
  p.x = 240 + sin((w * TAU) / 4 + f) * 100;
  p.y = 240 + cos((w * TAU) / 4 + f) * 100;
  o.x = 240 + sin(((w + 1) * TAU) / 4 + f) * 100;
  o.y = 240 + cos(((w + 1) * TAU) / 4 + f) * 100;
}

// ---- Original Processing source: #p5t/ArtSketch/10_02_2020/RingOfNonFire/RingOfNonFire.pde
/*
class P{float x,y;}
P p = new P(),o = new P();
float f;

void draw(){//f+=.1;
  fill(255,9);
  rect(0,0,480,480);
  noFill();
  frame.setSize(480,480);
  
  //quad(0,0,480,0,250,400,400, 400);
    
  // 
    
  //for(int i=0; i<3; i++){
    d(f);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+1);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+2);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+3);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    //quad(0,0,480,0,240,240,140,240); 
    //d(i);quad(480,0,480,480,p.x,p.y,o.x,o.y);
    //d(i);quad(480,480,0,480,p.x,p.y,o.x,o.y);
    //d(i);quad(0,480,0,0,p.x,p.y,o.x,o.y);
  //}
  
  println(o.x + "x" + o.y);
}

void d(float w){
  p.x=240+sin(w*TAU/4+f)*100;
  p.y=240+cos(w*TAU/4+f)*100;
  o.x=240+sin((w+1)*TAU/4+f)*100;
  o.y=240+cos((w+1)*TAU/4+f)*100;
}
*/
