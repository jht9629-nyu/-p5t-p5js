// ClockGame (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_29_2020/ClockGame/ClockGame.pde
// #p5t/ArtSketch/07_29_2020/ClockGame/ClockGame.pde

// Press any key other than 'a' when the gray hand passes the white one.
let i, f = 0, s = 0, c = 0, p = 250;
// Processing's sketch overwrote the global key with 'a' each frame to
// detect new presses; p5 owns key, so keep a copy that can be reset.
let k = '';

function setup() {
  createCanvas(500, 500);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
  background(204); // Processing default background
  frameRate(9);
  strokeWeight(9);
}

function keyPressed() {
  k = key;
}

function draw() {
  f++;
  s++;
  if (k != 'a') c = ceil(random(23));
  k = 'a';
  for (i = 0; i < 24; i++) {
    stroke(0);
    let a = (-PI * i) / 12;
    if (i == c) stroke(99);
    if (i == f % 24) stroke(p);
    if (c == f % 24) s = 0;
    line(p, p, p + sin(a) * p, p + cos(a) * p);
  }
  push();
  noStroke(); // Processing never strokes text
  text(s, p, p);
  pop();
}

// ---- Original Processing source: #p5t/ArtSketch/07_29_2020/ClockGame/ClockGame.pde
/*
int i,f,s,c,p=250;void setup(){size(500,500);frameRate(9);strokeWeight(9);}void draw(){f++;s++;if(key!='a')c=ceil(random(23));key='a';for(i=0;i<24;i++){stroke(0);float a=-PI*i/12;if(i==c)stroke(99);if(i==f%24)stroke(p);if(c==f%24)s=0;line(p,p,p+sin(a)*p,p+cos(a)*p);}text(s,p,p);}
*/
