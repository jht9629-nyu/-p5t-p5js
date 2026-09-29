// WiggleCave (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_07_2020/WiggleCave/WiggleCave.pde
// #p5t/ArtSketch/10_07_2020/WiggleCave/WiggleCave.pde

let i, j, f = 2, n, d = 0.03;

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  f += d;
  for (j = 99; j > 0; j--) {
    fill(j * 5);
    stroke(j * 3, 0, (i = 0));
    beginShape();
    for (; i < TAU; i += 0.06) {
      n = noise(i + j, f) / 3;
      vertex(240 + (sin(i) + n) * 20 * j * f, 240 + (cos(i) + n) * 20 * j * f);
    }
    endShape(CLOSE);
  }
  if (f > 3 || f < 0.5) d *= -1;
}
//#pt5

// ---- Original Processing source: #p5t/ArtSketch/10_07_2020/WiggleCave/WiggleCave.pde
/*
float i,j,f=2,n,d=.03;
void setup(){size(480,480);}
void draw(){
frame.setSize(480,480);
f+=d;
for(j=99;j>0;j--){
 fill(j*5);
 stroke(j*3,0,i=0);
 beginShape();
 for(;i<TAU;i+=.06){
  n=noise(i+j,f)/3;
  vertex(240+(sin(i)+n)*20*j*f,240+(cos(i)+n)*20*j*f);
 }
 endShape(2);}
if(f>3|f<.5)d*=-1;
}//#pt5
*/
