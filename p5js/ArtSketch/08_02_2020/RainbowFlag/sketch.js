// RainbowFlag (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_02_2020/RainbowFlag/RainbowFlag.pde
// #p5t/ArtSketch/08_02_2020/RainbowFlag/RainbowFlag.pde

//#p5t
let x, i, j, f = 0, a, b, l = 50;

function setup() {
  createCanvas(500, 500);
  b = PI / 50;
  colorMode(HSB, 99);
  background(0); // clear()
}

function draw() {
  f += 0.025;
  a = 0;
  for (i = 0; i < 11; i++) {
    for (j = 0; j < 99; j++) {
      x = i * l;
      a = a + b;
      stroke(j, 99, 80);
      line(x, j * 6 - l, x + sin(a + f) * 40, j * 5 - l);
      stroke(0);
      line(x + 1, j * 6 - l, x + 1 + sin(a + f) * 40 + 1, j * 5 - l);
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_02_2020/RainbowFlag/RainbowFlag.pde
/*
//#p5t
float x,i,j,f,a,b=PI/50,l=50;
void setup(){size(500,500);colorMode(HSB,99);clear();}
void draw(){f+=.025;a=0;
  for(i=0;i<11;i++){for(j=0;j<99;j++){x=i*l;a=a+b;
    stroke(j,99,80);line(x,j*6-l,x+sin(a+f)*40,j*5-l);
    stroke(0);line(x+1,j*6-l,x+1+sin(a+f)*40+1,j*5-l);}}}
*/
