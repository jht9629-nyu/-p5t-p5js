// ColorSwirl (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_29_2020/ColorSwirl/ColorSwirl.pde
// #p5t/ArtSketch/08_29_2020/ColorSwirl/ColorSwirl.pde

let a = 0,
  f = 0,
  inc;

function setup() {
  createCanvas(500, 500);
  inc = PI / 99;
  colorMode(HSB, 255);
  background(0); // clear()
}

function draw() {
  f += 0.005;
  a = f;
  stroke((f * 99) % 255, 155, 155);
  for (let i = -100; i < 600; i = i + 2) {
    push();
    translate(i, 250 + sin((i + f * 9) / 100) * 99);
    rotate(f);
    line(0, 0, 0, tan(a) * (f % 9));
    a = a + inc;
    pop();
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_29_2020/ColorSwirl/ColorSwirl.pde
/*
float a,f,inc=PI/99;
void setup(){size(500,500);colorMode(HSB,255);clear();}
void draw(){f+=.005;a=f;
 stroke(f*99%255,155,155);
 for(int i=-100;i<600;i=i+2){
  push();
  translate(i,250+sin((i+f*9)/100f)*99);
  rotate(f);
  line(0,0,0,tan(a)*(f%9));
   a=a+inc;
   pop();}
}//#p5t
*/
