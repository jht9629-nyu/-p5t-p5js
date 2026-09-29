// Game (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_08_2020/Game/Game.pde
// #p5t/ArtSketch/07_08_2020/Game/Game.pde

// The original used frameRate(500); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 8;

// Keys: 'a' moves left, 'd' moves right (the last key pressed keeps moving).
let s = 0,
  a = 0,
  b = 0,
  x = 250;

function setup() {
  createCanvas(500, 500);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
  textSize(50);
}

function draw() {
  for (let n = 0; n < STEPS_PER_FRAME; n++) step();
}

function step() {
  background(0); // clear()
  b--;
  rect(a, b, 99, 9);
  if (key == 'a') {
    x--;
  }
  if (key == 'd') {
    x++;
  }
  text(s, x, 99);
  if (b < 99) {
    b = 510;
    if (x > a && x < a + 99) {
      s++;
      a = floor(random(0, 400));
    } else {
      s = 0;
      x = 250;
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_08_2020/Game/Game.pde
/*
int s,a,b,x=250;
public void setup(){
  size(500,500);
  textSize(50);
  frameRate(500);}
public void draw(){clear();
  b--;
  rect(a,b,99,9);
  if(key=='a'){x--;}if(key=='d'){x++;}
  text(s,x,99);
  if (b<99){b=510;if(x>a&&x<a+99){s++;a=(int)random(0,400);}
  else {s=0;x=250;}}}
*/
