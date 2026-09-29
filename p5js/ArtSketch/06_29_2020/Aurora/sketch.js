// Aurora (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/06_29_2020/Aurora/Aurora.pde
// #p5t/ArtSketch/06_29_2020/Aurora/Aurora.pde

let f = 0,
  y = 500;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  noFill();
}

function draw() {
  for (let o = 0; o < 500; o += 100) {
    for (let x = 0; x < 500; x += 10) {
      rect(x, y + noise(x) * 10 + o, 10, 10);
    }
  }

  y--;

  if (y < -20) {
    y += 100;
    stroke(random(255), random(255), random(255));
  }
}

// ---- Original Processing source: #p5t/ArtSketch/06_29_2020/Aurora/Aurora.pde
/*
int f,y=500;

void setup(){
  size(500, 500);
  noFill();
}

void draw(){
  for(int o=0; o<500; o+=100){
   for(int x=0; x<500; x+=10){
      rect(x, y+noise(x)*10+o, 10, 10);
    }
  }
  
  y--;
  
  if(y<-20){
    y+=100;
    stroke(random(255), random(255), random(255));
  }
}
*/
