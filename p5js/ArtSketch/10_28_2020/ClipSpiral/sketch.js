// ClipSpiral (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_28_2020/ClipSpiral/ClipSpiral.pde
// #p5t/ArtSketch/10_28_2020/ClipSpiral/ClipSpiral.pde

let f = 0, i, l = 1, m = 0, c = 480;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  m++;
  noStroke();
  colorMode(HSB, 99);
  f += l;
  l *= f < 0 || f > 240 ? -1 : 1;
  // Processing's clip(x, y, w, h); p5 1.x has no rectangle clip.
  push();
  drawingContext.beginPath();
  drawingContext.rect(f, f, c - f * 2, c - f * 2);
  drawingContext.clip();
  fill((m / 9) % 99, 99, 99);
  rect(f, f, c - f * 2, c - f * 2);
  fill('#FFFFFF'); // fill(-1)
  translate(240, 240);
  rotate(f / 9);
  for (i = 0; i++ < 480 * 9; ) circle((sin(i / 99) * i) / 9, (cos(i / 99) * i) / 9, 9);
  pop();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_28_2020/ClipSpiral/ClipSpiral.pde
/*
float f,i,l=1,m,c=480;void draw(){m++;frame.setSize(480,480);noStroke();colorMode(3,99);f+=l;l*=f<0|f>240?-1:1;clip(f,f,c-f*2,c-f*2);fill((m/9)%99,99,99);rect(f,f,c-f*2,c-f*2);fill(-1);translate(240,240);rotate(f/9);for(i=0;i++<480*9;)circle(sin(i/99)*i/9,cos(i/99)*i/9,9);}//#p5t
*/
