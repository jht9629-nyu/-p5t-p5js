// CircleClock (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_14_2020/CircleClock/CircleClock.pde
// #p5t/ArtSketch/08_14_2020/CircleClock/CircleClock.pde

let i, c, r;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
}

function draw() {
  background(0); // clear()
  for (i = 3; i < 8; i += 2) {
    c =
      i < 4
        ? (second() / 60) * 2 * PI
        : i < 6
        ? (minute() / 60) * 2 * PI
        : (PI * 2 * abs(hour() - 12)) / 12;
    r = (8 - i) * 99;
    fill(i * 28);
    // Processing draws nothing when the arc's stop angle isn't past its start.
    if (c > 0) arc(250, 250, r, r, -PI / 2, c - PI / 2);
  }
  fill(9 * 28);
  for (i = 0; i < PI * 2; i += (2 * PI) / 12) {
    circle(250 + sin(i) * 225, 250 + cos(i) * 225, 50);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_14_2020/CircleClock/CircleClock.pde
/*
float i,c,r;void draw(){frame.setSize(500,500);clear();for(i=3;i<8;i+=2){c=(i<4)?second()/60f*2*PI:(i<6)?minute()/60f*2*PI:PI*2*abs(hour()-12)/12;r=(8-i)*99;fill(i*28);arc(250,250,r,r,-PI/2,c-PI/2);}fill(9*28);for(i=0;i<PI*2;i+=2*PI/12){circle(250+sin(i)*225,250+cos(i)*225,50);}}
*/
