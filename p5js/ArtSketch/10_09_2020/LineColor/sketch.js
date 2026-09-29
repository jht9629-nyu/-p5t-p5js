// LineColor (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_09_2020/LineColor/LineColor.pde
// #p5t/ArtSketch/10_09_2020/LineColor/LineColor.pde

let n = 480;
let a = 0,
  f = 9,
  d = 0.1,
  x,
  y;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  f += d;
  a += 0.1;
  strokeWeight(4);
  colorMode(HSB, 99);
  if (f > 99 || f < 9) d *= -1;
  fill(0, 9);
  rect(-5, -5, 490, 490);
  for (x = 0; x <= n; x += 16)
    for (y = 0; y <= n; y += 16) {
      stroke(50, 99, 99, 18);
      line(x, y, 240 + sin(a) * f, 240 + cos(a) * f);
    }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_09_2020/LineColor/LineColor.pde
/*
int n=480;
float a,f=9,d=.1,x,y;
void draw(){
 f+=d;a+=.1;strokeWeight(4);
 colorMode(3,99); 
 if(f>99|f<9)d*=-1;
 frame.setSize(n,n);
 fill(0,9);rect(-5,-5,490,490);
 for(x=0;x<=n;x+=16)
 for(y=0;y<=n;y+=16){
  stroke(50,99,99,18);
  line(x,y,240+sin(a)*f,240+cos(a)*f);}}//#p5t
*/
