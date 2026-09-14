let x = 1,
  y = 0;
let s = 480;
let a = s / 2,
  b = s / 2;

function setup() {
  pixelDensity(1);
  createCanvas(s, s);
  //   background(0);
  background(255);
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

// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_11_2021/LangtonsAnt/LangtonsAnt.pde
// int x=1,y,s=480,a=s/2,b=a,c;void setup(){size(480,480);clear();frameRate(s);}void draw(){loadPixels();set(a, b,c=red(pixels[a+b*s])>0?#000000:-1);if(c<-1)if(x!=0){y=-x;x=0;}else{x=y;y=0;}else if(x!=0){y=x;x=0;}else{x=-y;y=0;}a+=x+s;a%=s;b+=y+s;b%=s;}
//http://bit.ly/3fa1Pam #p5t
// #p5t/ArtSketch/05_11_2021/LangtonsAnt/LangtonsAnt.pde
// https://github.com/madparker/-p5t
