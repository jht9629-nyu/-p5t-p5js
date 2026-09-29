// DontPanic (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_03_2020/DontPanic/DontPanic.pde
// #p5t/ArtSketch/11_03_2020/DontPanic/DontPanic.pde

function setup() {
  createCanvas(480, 480);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  background(0); // clear()
  text("DON'T PANIC", 200 + random(3), 230 + random(3));
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_03_2020/DontPanic/DontPanic.pde
/*
void setup(){
  size(480,480);
}

void draw(){clear();
  text("DON'T PANIC", 200+random(3),230+random(3));
}//#p5t
*/
