// Wipe (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_05_2020/Wipe/Wipe.pde
// #p5t/ArtSketch/07_05_2020/Wipe/Wipe.pde

let y = 0;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  noStroke();
  frameRate(30);
}

function draw() {
  fill(0, 5);
  rect(-5, -5, 510, 510);
  for (let x = 0; x < 500; x += 10) {
    fill(random(y), random(255), random(x));
    circle(x + (y % 2) * 5, y, 10);
  }
  y += 5;
  if (y > 500) {
    y = 0;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_05_2020/Wipe/Wipe.pde
/*
float y;

void setup(){
  size(500,500);
  noStroke();
  frameRate(30);
}

void draw(){
  fill(0,5);
  rect(-5,-5,510,510);
  for(int x=0;x<500;x+=10){
    fill(random(y),random(255),random(x));
    circle(x+(y%2)*5,y,10);
  }
  y+=5;
  if(y>500){
    y=0;
  }
}
*/
