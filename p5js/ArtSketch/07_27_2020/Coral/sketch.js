// Coral (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_27_2020/Coral/Coral.pde
// #p5t/ArtSketch/07_27_2020/Coral/Coral.pde

let f = 0,
  c = 0;
let a = 0,
  h = 1;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  strokeWeight(10);
  stroke(255, 10);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += 0.005;
  fill(0, 20);
  rect(-20, -20, 540, 540);
  fill(255, 255, 0, 2);
  for (let i = 0; i < 17; i++) {
    a = i + 1;
    h = i % 2 == 0 ? 1 : -1;
    fill(125 + i * h * 10, i);
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

// ---- Original Processing source: #p5t/ArtSketch/07_27_2020/Coral/Coral.pde
/*
float f,c;
int a,h=1;

void setup(){
  size(500,500,P3D);
  strokeWeight(10);
  stroke(255,10);
}

void draw(){f+=.005;
  fill(0,20);
  rect(-20,-20,540,540);
  fill(255,255,0,2);
  for(int i=0;i<17;i++){a=i+1;
    h=(i%2==0)?1:-1;
    fill(125+i*h*10,i);
    arc(250, 250, 490-i*30, 490-i*30, h*a*f+a*PI/4, h*a*f+PI+a*PI/4);
  }
}
*/
