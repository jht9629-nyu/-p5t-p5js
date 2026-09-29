// EyesInTheDark (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_01_2020/EyesInTheDark/EyesInTheDark.pde
// #p5t/ArtSketch/11_01_2020/EyesInTheDark/EyesInTheDark.pde

let i, f = 0, x = 0, y = 0, u = 1;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
}

function draw() {
  rectMode(CENTER); // rectMode(3)
  background(0); // clear()
  f -= u *= f < 0 ? -1 : 1;
  if (f > 50) {
    x = random(350);
    y = random(430);
    u *= -1;
  }
  for (i = -1; ++i < 2; ) {
    fill(255); // fill(-1)
    ellipse(x + i * 60, y, 50, 25);
    fill('#640707');
    circle(x + i * 60, y, 25);
    fill(0);
    circle(x + i * 60, y, 9);
    rect(x + i * 60, y - 50 + f, 50, 30);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_01_2020/EyesInTheDark/EyesInTheDark.pde
/*
float i,f,x,y,u=1;
void draw(){frame.setSize(480,480);rectMode(3);clear();f-=u*=f<0?-1:1;
if(f>50){x=random(350);y=random(430);u*=-1;}
for(i=-1;++i<2;){fill(-1);ellipse(x+i*60,y,50,25);fill(#640707);circle(x+i*60,y,25);fill(0);circle(x+i*60,y,9);rect(x+i*60,y-50+f,50,30);}}//#p5t
*/
