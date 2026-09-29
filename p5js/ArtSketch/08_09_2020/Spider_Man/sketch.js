// Spider_Man (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_09_2020/Spider_Man/Spider_Man.pde
// #p5t/ArtSketch/08_09_2020/Spider_Man/Spider_Man.pde

let x = 0,
  y = 0,
  a = 0,
  b = 0,
  f = 21,
  t = 35,
  c = 250;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  frameRate(5);
  strokeWeight(9);
  fill(c, 0, 0, 9);
}

function draw() {
  f++;
  rect(0, 0, 500, 500);
  if (f < 20) {
    a = c;
    b = c;
    x = c + sin(f) * 500;
    y = c + cos(f) * 500;
    line(c, c, x, y);
  } else {
    t++;
    x = c + sin(f) * t * 9;
    y = c + cos(f) * t * 9;
    line(a, b, x, y);
    a = x;
    b = y;
    if (t > 34) {
      t = 0;
      f = 0;
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_09_2020/Spider_Man/Spider_Man.pde
/*
float x,y,a,b,f=21,t=35,c=250;
void setup(){size(500,500);frameRate(5);strokeWeight(9);fill(c,0,0,9);}
void draw(){f++;rect(0,0,500,500);if(f<20){a=c;b=c;x=c+sin(f)*500;y=c+cos(f)*500;line(c,c,x,y);}else{t++;x=c+sin(f)*t*9;y=c+cos(f)*t*9;line(a,b,x,y);a=x;b=y;if(t>34){t=0;f=0;}}}
*/
