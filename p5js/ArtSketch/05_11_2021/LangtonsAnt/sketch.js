// https://editor.p5js.org/jht9629-nyu/sketches/xx
// matt-parker-05_11 v1

// how to create a clear canvas ?

let x = 1,
  y = 0;
let s = 480;
let a = s / 2,
  b = s / 2;

function setup() {
  pixelDensity(1);
  createCanvas(s, s);
  clear();
  //   background(0);
  //   background(255);
  frameRate(s);
}

function draw() {
  loadPixels();
  let index = (a + b * s) * 4;
  let isWhite = pixels[index] > 0;

  if (isWhite) {
    pixels[index] = 0;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;
    if (x !== 0) {
      y = -x;
      x = 0;
    } else {
      x = y;
      y = 0;
    }
  } else {
    pixels[index] = 255;
    pixels[index + 1] = 255;
    pixels[index + 2] = 255;
    pixels[index + 3] = 255;
    if (x !== 0) {
      y = x;
      x = 0;
    } else {
      x = -y;
      y = 0;
    }
  }
  updatePixels();

  a = (a + x + s) % s;
  b = (b + y + s) % s;
}

// Claude code: convert LansgonsAnt from processing to p5js and store html in same folder name in top level folder p5js

// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_11_2021/LangtonsAnt/LangtonsAnt.pde
// int x=1,y,s=480,a=s/2,b=a,c;void setup(){size(480,480);clear();frameRate(s);}void draw(){loadPixels();set(a, b,c=red(pixels[a+b*s])>0?#000000:-1);if(c<-1)if(x!=0){y=-x;x=0;}else{x=y;y=0;}else if(x!=0){y=x;x=0;}else{x=-y;y=0;}a+=x+s;a%=s;b+=y+s;b%=s;}
// http://bit.ly/3fa1Pam #p5t
// #p5t/ArtSketch/05_11_2021/LangtonsAnt/LangtonsAnt.pde
// https://github.com/madparker/-p5t

// https://en.wikipedia.org/wiki/Langton's_ant

// https://github.com/jht9629-nyu/-p5t-p5js.git
//  p5js/ArtSketch/05_11_2021/LangtonsAnt/sketch.js
