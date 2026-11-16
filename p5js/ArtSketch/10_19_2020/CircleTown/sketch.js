// CircleTown (p5.js 2.3.4 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_19_2020/CircleTown/CircleTown.pde
// #p5t/ArtSketch/10_19_2020/CircleTown/CircleTown.pde

// The original used frameRate(480); browsers cap draw() at ~60fps,
// so draw() runs tick() several times per frame to keep the original speed.
const STEPS_PER_FRAME = 8;


let x, y, c = 480;
let f = 0;

function setup() {
  jcreateCanvas(480, 480);
  jcolorMode(HSB, c);
  background(0); // clear()
  noStroke();
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) tick();
  jsync();
}

// Named tick, not step: p5 2.x has a global step().
function tick() {
  f++;
  for (x = 0; x < c; x++) {
    for (y = 0; y < c; y++) jset(x, y, jcolorInt(jget(x + 1, y)));
  }

  jsync(); // write the pixels before p5 draws on top
  fill(f % c, c, c);
  circle(sin(f) * 200 + 275, cos(f) * 200 + 240, 9);
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_19_2020/CircleTown/CircleTown.pde
/*
int x,y,c=480;
float f;
void setup(){
  size(480,480);
  colorMode(HSB,c);
clear();noStroke();frameRate(c);
}
void draw(){
  f++;
  for(x=0;x<c;x++)
    for(y=0;y<c;y++)
      set(x,y,color(get(x+1,y)));
    
  fill(f%c,c,c);
  circle(sin(f)*200+275,cos(f)*200+240,9);
}//#p5t
*/
