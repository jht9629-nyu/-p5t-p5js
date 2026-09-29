// Multiverse (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_16_2020/Multiverse/Multiverse.pde
// #p5t/ArtSketch/07_16_2020/Multiverse/Multiverse.pde

let x = 0,
  y = 0,
  d = 0;
let c = 0,
  i = 250;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  noStroke();
  colorMode(HSB, 99);
}

function draw() {
  fill(0, 2);
  circle(x, y, 99);
  fill(c);
  circle(x, y, d * 9);
  d = dist(i, i, x, y) / 99;
  x += (d * (x - i)) / 5;
  y += (d * (y - i)) / 5;
  if (x > 500 || x < 0 || y > 500 || y < 0) {
    c = color(random(99), 60, 50);
    x = random(150, 350);
    y = random(150, 350);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_16_2020/Multiverse/Multiverse.pde
/*
float x,y,d;int c,i=250;
void setup(){size(500,500);noStroke();colorMode(HSB,99);}
void draw(){fill(0,2);circle(x,y,99);fill(c);circle(x,y,d*9);d=dist(i,i,x,y)/99;x+=d*(x-i)/5;y+=d*(y-i)/5;if(x>500||x<0||y>500||y<0){c=color(random(99),60,50);x=random(150,350);y=random(150,350);}}
*/
