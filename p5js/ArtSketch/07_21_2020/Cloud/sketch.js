// Cloud (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_21_2020/Cloud/Cloud.pde
// #p5t/ArtSketch/07_21_2020/Cloud/Cloud.pde

let x = new Array(99).fill(0);
let y = new Array(99).fill(0);
let f = 0;

function setup() {
  createCanvas(500, 500);
  background(0); // clear()
  colorMode(HSB, 99);
  noStroke();
}

function draw() {
  f++;
  for (let i = 0; i < 98; i++, x[i] += random(-9, 9), y[i] += random(-9, 9)) {
    fill(i, 99, 99, 5);
    circle(x[i], y[i], 9);
    if (y[i] < 0 || y[i] > 500) {
      x[i] = floor(i / 2); // Java int division
      y[i] = 0;
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_21_2020/Cloud/Cloud.pde
/*
float[] x=new float[99];float[] y=new float[99];int f;

void setup(){
  size(500,500);clear();colorMode(HSB,99);noStroke();}

void draw(){f++;
  for(int i=0;i<98;i++,x[i]+=random(-9,9),y[i]+=random(-9,9)){
    fill(i,99,99,5);circle(x[i],y[i],9);
    if(y[i]<0||y[i]>500){x[i]=i/2;y[i]=0;}}}
*/
