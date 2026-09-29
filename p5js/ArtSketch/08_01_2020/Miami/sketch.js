// Miami (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_01_2020/Miami/Miami.pde
// #p5t/ArtSketch/08_01_2020/Miami/Miami.pde

let f = 0,
  h = 0,
  c = 250,
  d = 500,
  a = 100,
  t = 200;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(t, c, c);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  fill(c, c, t);
  circle(a, a, 50);
  fill(c, t, t);
  f += 3;
  f %= d * 9;
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < 5; j++) {
      push();
      h = noise(i + j) * a * 3;
      translate(j * 400 - d, d - h / 2, -i * c + f);
      box((i % 2) * a + a, h, (j % 2) * a + a);
      pop();
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_01_2020/Miami/Miami.pde
/*
float f,h,c=250,d=500,a=100,t=200;
void setup(){size(500,500,P3D);background(t,c,c);}
void draw(){fill(c,c,t);circle(a,a,50);fill(c,t,t);f+=3;f%=d*9;for(int i=0;i<a;i++){
for(int j=0;j<5;j++){push();h=noise(i+j)*a*3;translate(j*400-d,d-h/2,-i*c+f);box(i%2*a+a,h,j%2*a+a);pop();}}}
        
//float f,h,c=250,d=500,a=100,t=200;
//void setup(){size(500,500,P3D);background(t,c,c);}
//void draw(){f+=3;f%=d*9;fill(c,c,0);circle(a,a,50);fill(c,t,t);
//  for(int i=0;i<a;i++){push();translate(-a,a,-i*c+f);
//      for(int j=0;j<5;j++){push();h=noise(i+j)*400;
//        translate(j*400-d,d-h/2,0);box(h);pop();}pop();}}
        
        
//float f,h,c=250,d=500,a=100,t=200,i,j;void setup(){size(500,500,P3D);background(t,c,c);}
//void draw(){f+=3;f%=d*9;
//  fill(c,t,t);circle(a,a,50);
//  for(i=0;i<a;i++){push();translate(-a,a,-i*c+f);
//      for(j=0;j<5;j++){push();h=noise(i+j)*400;
//        translate(j*400-d,d-h/2);box(h);pop();}pop();}}
*/
