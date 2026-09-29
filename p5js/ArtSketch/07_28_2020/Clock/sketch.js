// Clock (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_28_2020/Clock/Clock.pde
// #p5t/ArtSketch/07_28_2020/Clock/Clock.pde

let f = 0;
let a = 0,
  h = 1;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  strokeWeight(9);
  stroke(255, 10);
}

function draw() {
  f += 0.005;
  fill(0, 20);
  square(0, 0, 500);
  for (let i = 0; i < 17; i++) {
    a = i + 1;
    h = i % 2 == 0 ? 1 : -1;
    fill(125 + i * h * 9, i);
    arc(
      250,
      250,
      490 - i * 30,
      490 - i * 30,
      h * a * f + (a * PI) / 4,
      h * a * f + PI + (a * PI) / 4
    );
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_28_2020/Clock/Clock.pde
/*
float f;int a,h=1;

void setup(){size(500,500);strokeWeight(9);stroke(255,10);}

void draw(){f+=.005;
  fill(0,20);
  square(0,0,500);
  for(int i=0;i<17;i++){a=i+1;
    h=(i%2==0)?1:-1;
    fill(125+i*h*9,i);
    arc(250,250,490-i*30,490-i*30,h*a*f+a*PI/4,h*a*f+PI+a*PI/4);
  }
}
*/
