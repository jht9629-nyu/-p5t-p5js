// https://editor.p5js.org/jht9629-nyu/sketches/q4fdjRXyQ
// matt-parker-07_22-Peek
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_22_2020/Peek/Peek.pde
// #p5t/ArtSketch/07_22_2020/Peek/Peek.pde

let x = new Array(64).fill(0),
  y = new Array(64).fill(0);
let f = 0;
let s = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  f += 0.3;
  background(0); // clear()
  for (let i = 0; i < 64; i++) {
    if (f < 5) {
      x[i] = (i % 8) * 62 + 32;
      y[i] = floor(i / 8) * 62; // Java int division
    }
    y[i]++;
    s = sin((y[i] + f) / 20);
    circle(x[i] + s * 50, y[i], s * 9);
    if (y[i] > 500) y[i] = 0;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_22_2020/Peek/Peek.pde
/*
float[] x=new float[64],y=new float[64];float f;float s;

void setup(){
  size(500,500);
}

void draw(){f+=.3;
  clear();
  for(int i=0;i<64;i++){
    if(f<5){x[i]=i%8*62+32;y[i]=i/8*62;}
    y[i]++;s=sin((y[i]+f)/20);
    circle(x[i]+s*50,y[i],s*9);
    if(y[i]>500)y[i]=0;
  }
}
*/
