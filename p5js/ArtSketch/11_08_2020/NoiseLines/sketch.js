// https://editor.p5js.org/jht9629-nyu/sketches/ZdksarxaK
// matt-parker-11_08-NoiseLines
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_08_2020/NoiseLines/NoiseLines.pde
// #p5t/ArtSketch/11_08_2020/NoiseLines/NoiseLines.pde

let n = 480,
  f = 0;
let x, y, a;

function draw() {
  f++;
  colorMode(HSB, 99);
  fill(0, 1);
  rect(0, 0, 480, 480);
  for (x = 9; x < n; x += 10) {
    for (y = 9; y < n; y += 20) {
      a = noise(x / 99, (y + f) / 99);
      push();
      translate(x, y);
      rotate(a * TAU);
      stroke(a * 99, 99, 99);
      line(0, 0, 9, 9);
      pop();
    }
  }
}
//#p5t

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
}

// ---- Original Processing source: #p5t/ArtSketch/11_08_2020/NoiseLines/NoiseLines.pde
/*
int n=480,f;
float x,y,a;
void draw(){f++;frame.setSize(n,n);colorMode(3,99);
  fill(0,1);rect(0,0,480,480);
  for(x=9;x<n;x+=10)for(y=9;y<n;y+=20){
   a=noise(x/99f,(y+f)/99f);
   push();
   translate(x,y);rotate(a*TAU);
   stroke(a*99,99,99);
   line(0,0,9,9);
   pop();}}//#p5t
   
   void setup(){size(480,480);}
*/
