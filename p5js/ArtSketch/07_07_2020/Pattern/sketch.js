// https://editor.p5js.org/jht9629-nyu/sketches/Oe3Q6gjBr
// matt-parker-07_07-Pattern
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_07_2020/Pattern/Pattern.pde
// #p5t/ArtSketch/07_07_2020/Pattern/Pattern.pde

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  strokeWeight(10);
  frameRate(8);
}

function draw() {
  for (let i = 0; i < 25000; i += 50) {
    let x = i % 500;
    let y = floor(i / 500) * 50; // Java int division
    stroke(random(127), random(127), 255);
    fill(random(127), random(127), 255, 150);
    rect(x, y, 45, 45);
    circle(x + 20, y + 20, 10);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_07_2020/Pattern/Pattern.pde
/*
public void setup(){
  size(500,500);strokeWeight(10);frameRate(8);
}

public void draw(){
  for (int i=0;i<25000;i+=50){
    int y,x=i%500;y=(i/500)*50;
    stroke(random(127),random(127),255);fill(random(127),random(127),255,150);
    rect(x,y,45,45);circle(x+20,y+20,10);
  }
}
*/
