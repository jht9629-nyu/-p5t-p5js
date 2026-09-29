// ColorTiles (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_04_2020/ColorTiles/ColorTiles.pde
// #p5t/ArtSketch/08_04_2020/ColorTiles/ColorTiles.pde

let f = 0,
  m = 0,
  n = 99,
  r = 50;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  strokeWeight(9);
  colorMode(HSB, n);
  noFill();
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += 0.15;
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 5; y++) {
      push();
      m = y % 2 == 0 ? -1 : 1;
      translate(x * r, y * n + r);
      rotateX(sin(((x + f * m) / 10) * m) * PI);
      stroke((f + x * 2) % n, r, r);
      rect(0, 0, r, r);
      pop();
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_04_2020/ColorTiles/ColorTiles.pde
/*
float f,m,n=99,r=50;
void setup(){size(500,500,P3D);strokeWeight(9);colorMode(HSB,n);noFill();}
void draw(){f+=.15;
for(int x=0;x<10;x++){for(int y=0;y<5;y++){push();m=(y%2==0)?-1:1;
translate(x*r,y*n+r);rotateX(sin((x+f*m)/10*m)*PI);stroke((f+x*2)%n,r,r);
rect(0,0,r,r);pop();}}}
*/
