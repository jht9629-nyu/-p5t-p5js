// string (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_03_2020/string/string.pde
// #p5t/ArtSketch/07_03_2020/string/string.pde

let a = 0,
  x = 0,
  c = 250;

function setup() {
  createCanvas(500, 500);
  a--;
}

function draw() {
  background(0); // clear()
  x += a;
  stroke(0, x, c - x);

  for (let i = 0; i < 500; i += 10) {
    line(c - x, i, i, c + x);
    line(i, c - x, c + x, i);
    line(i, c + x, c + x, 500 - i);
    line(i, c - x, c - x, 500 - i);
  }

  if (x > c || x < 0) {
    a *= -1;
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_03_2020/string/string.pde
/*
int a,x,c=250;

void setup(){
  size(500,500);
  a--;
}

void draw(){
  clear();x+=a;
  stroke (0,x,c-x);
  
  for(int i=0;i<500;i+=10){
    line(c-x,i,i,c+x);
    line(i,c-x, c+x,i);
    line(i,c+x,c+x,500-i);
    line(i,c-x,c-x,500-i);
  }
    
  if(x>c||x<0){
    a*=-1;
  }
}
*/
