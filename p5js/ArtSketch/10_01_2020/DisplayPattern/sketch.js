// DisplayPattern (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_01_2020/DisplayPattern/DisplayPattern.pde
// #p5t/ArtSketch/10_01_2020/DisplayPattern/DisplayPattern.pde

let y = new Array(72).fill(0);
let f = 0,
  s;
let i,
  n = 480;

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  f += 0.02;
  fill(0, 3);
  square(0, 0, n);
  noStroke();
  fill(255);
  for (i = 0; i < 72; ) {
    y[i] =
      f < 1
        ? Math.trunc(i / 9) * 62 // Java int division
        : y[i] < 0
        ? n
        : y[i] > n
        ? 0
        : i % 2 < 1
        ? y[i] + 0.5
        : y[i] - 0.5;
    s = sin(f);
    circle((i % 9) * 62 + s * 50, y[i++], s * 29);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_01_2020/DisplayPattern/DisplayPattern.pde
/*
float[] y=new float[72];float f,s;int i,n=480;
void setup(){size(480,480);}
void draw(){
 frame.setSize(n,n);
 f+=.02;
 fill(0,3);
 square(0,0,n);
 noStroke();
 fill(255);
 for(i=0;i<72;){
  y[i]=f<1?i/9*62:y[i]<0?n:y[i]>n?0:i%2<1?y[i]+.5:y[i]-.5;
  s=sin(f);
  circle(i%9*62+s*50,y[i++],s*29);
 }
}//#p5t
*/
