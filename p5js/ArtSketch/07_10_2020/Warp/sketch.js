// Warp (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_10_2020/Warp/Warp.pde
// #p5t/ArtSketch/07_10_2020/Warp/Warp.pde

// The original used frameRate(999); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 16;

let x = 0,
  y = 0,
  a = 0.5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  // Every step repaints the whole canvas, so only the last one is visible:
  // advance the motion STEPS_PER_FRAME times, then draw once.
  for (let n = 0; n < STEPS_PER_FRAME; n++) {
    x += a;
    if (x > 500 || x < 0) {
      a *= -1;
    }
  }
  background(255, 255, 255);
  y = 250 + sin(x / 30) * 250;
  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      line(i * 20, j * 20, x, y);
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_10_2020/Warp/Warp.pde
/*
float x,y,a=.5;
public void setup(){
  size (500,500);
 frameRate(999);
}
  
public void draw(){
  x+=a;
  background (255,255,255);
  y=250+sin(x/30f)*250;
  for (int i=0;i<25;i++){
    for(int j=0;j<25;j++){
    line(i*20,j*20,x,y);
    }
  }
  if(x>500||x<0){
    a*=-1;
  }
}
*/
