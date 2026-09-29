// Mandala (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_20_2020/Mandala/Mandala.pde
// #p5t/ArtSketch/07_20_2020/Mandala/Mandala.pde

let x = new Array(999).fill(0);
let y = new Array(999).fill(0);
let f = 0;

function setup() {
  createCanvas(500, 500);
  background(0); // clear()
  colorMode(RGB, 99);
  noStroke();
}

function draw() {
  f++;
  for (let i = 0; i < 999; i++) {
    fill(x[i] / 5, i % 99, 99 - (i % 99), 5);
    circle(x[i], y[i], 9);
    x[i] += random(-9, 9);
    y[i] += random(-9, 9);
    if (x[i] < 0 || x[i] > 500 || y[i] < 0 || y[i] > 500) {
      x[i] = floor(i / 2); // Java int division
      y[i] = f % 500;
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_20_2020/Mandala/Mandala.pde
/*
float[] x=new float[999];
float[] y=new float[999];
int f;

void setup(){
  size(500,500);clear();colorMode(RGB,99);noStroke();
}

void draw(){
  f++;
  for(int i=0;i<999;i++){
    fill(x[i]/5,i%99,99-i%99,5);
    circle(x[i],y[i],9);
    x[i]+=random(-9,9);
    y[i]+=random(-9,9);
    if(x[i]<0||x[i]>500||y[i]<0||y[i]>500){
      x[i]=i/2;y[i]=f%500;
    }
  }
}
*/
