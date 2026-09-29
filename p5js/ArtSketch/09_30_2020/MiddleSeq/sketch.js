// MiddleSeq (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_30_2020/MiddleSeq/MiddleSeq.pde
// #p5t/ArtSketch/09_30_2020/MiddleSeq/MiddleSeq.pde

let x, y = 0, n = 480;

function setup() {
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
  frameRate(20);
}

function draw() {
  noStroke();
  fill(0, 12);
  rect((x = 0), 0, n, n);
  for (; x < n; x += 9) {
    fill(random(y), random(255), random(x));
    circle(x + (y % 2) * 5, y, 9);
    circle(x + ((n - y) % 2) * 5, n - y, 9);
    circle(y, x + (y % 2) * 5, 9);
    circle(n - y, x + ((n - y) % 2) * 5, 9);
  }
  y = y > n + 30 ? 0 : y + 3;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_30_2020/MiddleSeq/MiddleSeq.pde
/*
int x,y,n=480;void draw(){frameRate(20);frame.setSize(n,n);noStroke();fill(0,12);rect(x=0,0,n,n);for(;x<n;x+=9){fill(random(y),random(255),random(x));circle(x+(y%2)*5,y,9);circle(x+((n-y)%2)*5,(n-y),9);circle(y,x+(y%2)*5,9);circle((n-y),x+((n-y)%2)*5,9);}y=y>n+30?0:y+3;}//#p5t
*/
