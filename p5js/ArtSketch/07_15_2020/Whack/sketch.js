// Whack (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_15_2020/Whack/Whack.pde
// #p5t/ArtSketch/07_15_2020/Whack/Whack.pde

// Move the mouse over the red circle before it fades.
let x, y, t = 0, c = 0, s = 0, a, b, i;

function setup() {
  createCanvas(500, 500);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
  textSize(24);
}

function draw() {
  a = mouseX;
  b = mouseY;
  background(0); // clear()
  t--;
  if (t < 0) {
    s = 0;
    t = 9;
  }
  for (i = 0; i < 16; i++) {
    x = (i % 4) * 165;
    y = floor(i / 4) * 165; // Java int division
    if (i == c) {
      fill(t * 6, 0, 0);
      circle(x, y, 100);
      if (dist(a, b, x, y) < 50) {
        s++;
        t = 40;
        c = floor(random(16));
      }
    }
  }
  text(s, a, b);
}

// ---- Original Processing source: #p5t/ArtSketch/07_15_2020/Whack/Whack.pde
/*
int x,y,t,c,s,a,b,i;
void setup(){size(500,500);textSize(24);}
void draw(){
  a=mouseX;b=mouseY;clear();t--;
  if(t<0){s=0;t=9;}
  for(i=0;i<16;i++){
    x=i%4*165;y=i/4*165;if(i==c){fill(t*6,0,0);circle(x,y,100);if(dist(a,b,x,y)<50){s++;t=40;c=(int)random(16);}}}
  text(s,a,b);}
*/
