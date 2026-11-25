// https://editor.p5js.org/jht9629-nyu/sketches/pAA4G44vg
// matt-parker-10_31-ColorDrain
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_31_2020/ColorDrain/ColorDrain.pde
// #p5t/ArtSketch/10_31_2020/ColorDrain/ColorDrain.pde

let f = 0, x, y, n = 480, i, s, r;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, 99);
  f += i = 10;
  for (; i < 6000; i += 10) {
    r = (i + f) / -50;
    stroke(((i + f) / 99) % 99, 99, (99 * i) / n);
    fill(((i + f) / 99 + 50) % 99, 99, 99, (20 * i) / n);
    circle(240 + (sin(r) * i) / 9, 240 + (cos(r) * i) / 9, 9);
    circle(240 + (sin(r + PI) * i) / 9, 240 + (cos(r + PI) * i) / 9, 9);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_31_2020/ColorDrain/ColorDrain.pde
/*
float f,x,y,n=480,i,s,r;
void draw(){frame.setSize(480,480);colorMode(3,99);f+=i=10;
 for(;i<6000;i+=10){r=(i+f)/-50;stroke((i+f)/99%99,99,99*i/n);fill(((i+f)/99+50)%99,99,99,20*i/n);circle(240+sin(r)*i/9,240+cos(r)*i/9,9);circle(240+sin(r+PI)*i/9,240+cos(r+PI)*i/9,9);}}//#p5t
*/
