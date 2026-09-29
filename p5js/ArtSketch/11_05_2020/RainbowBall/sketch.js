// RainbowBall (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_05_2020/RainbowBall/RainbowBall.pde
// #p5t/ArtSketch/11_05_2020/RainbowBall/RainbowBall.pde

let f = 0, x, y, n = 480;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  colorMode(HSB, 99);
}

function draw() {
  jfill((x = (f % 2) - 1), 2); // -1 is white, 0 is black
  rect(-1, -1, 490, 490);
  f = f > n ? (f % 2) - 1 : f + 2;
  for (; x < n; x++)
    for (y = 0; y < n; y++) {
      let d = dist(x, y, 240, 240);
      if (d > f && d < f + 9) jset(x, y, jcolor(idiv(f + y, 6) % 59, 99, 49));
    }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_05_2020/RainbowBall/RainbowBall.pde
/*
int f,x,y,n=480;
void setup(){size(480,480);colorMode(3,99);}
void draw(){
  fill(x=f%2-1,2);
  rect(-1,-1,490,490);
  f=f>n?f%2-1:f+2;
  for(;x<n;x++)
    for(y=0;y<n;y++){
      float d=dist(x,y,240,240);
      if(d>f&d<f+9)
        set(x,y,color((f+y)/6%59,99,49));
    }
}//#p5t
*/
