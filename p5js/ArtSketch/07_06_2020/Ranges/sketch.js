// Ranges (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_06_2020/Ranges/Ranges.pde
// #p5t/ArtSketch/07_06_2020/Ranges/Ranges.pde

let x = 0,
  y = 0;

function setup() {
  createCanvas(500, 500);
  background(75, 75, 150);
}

function draw() {
  x++;
  y = noise(-frameCount / 500, -frameCount / 500) * 500;
  for (let i = y; i < 500; i++) {
    circle(x, i, 10);
  }

  if (x > 500) {
    x = 0;
    stroke(random(255), random(255), 250);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_06_2020/Ranges/Ranges.pde
/*
float x,y;

void setup(){
  size(500,500);
  background(75,75,150);
}

void draw(){
  x++;
  y=noise(-frameCount/500f,-frameCount/500f)* 500;
  for(float i=y;i<500;i++){
    circle(x, i, 10);
  }
  
  if(x>500){
    x=0;
    stroke(random(255),random(255),250);
  }
}
*/
