// DominoTwist (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_09_2020/DominoTwist/DominoTwist.pde
// #p5t/ArtSketch/09_09_2020/DominoTwist/DominoTwist.pde

let f = 0,
  m,
  j,
  i,
  n = 250;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
}

function draw() {
  f += 0.01;
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (j = 0; j < 8; ) {
    m = j % 2;
    // Processing keeps each light on for the rest of the frame, so later rows
    // are lit by all earlier lights. p5 drops lights at pop() and allows at
    // most 5, so add them outside push() and stop at 5.
    if (j < 5) directionalLight(n * m, 0, (1 - m) * n, 0, m, m - 1);
    push();
    translate((j % 2) * 550, 200 * j++ - n);
    for (i = 0; i < 500; ) {
      push();
      translate(20 * i, 0, f * 9 - 50 * i);
      rotateX(i++ / 9 + f);
      box(100, 200, 9);
      pop();
    }
    pop();
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_09_2020/DominoTwist/DominoTwist.pde
/*
float f,m,j,i,n=250;void setup(){size(500,500,P3D);}void draw(){f+=.01;clear();for(j=0;j<8;){push();m=j%2;directionalLight(n*m,0,(1-m)*n,0,m,m-1);translate((j%2)*550,200*j++-n);for(i=0;i<500;){push();translate(20*i,0,f*9-50*i);rotateX(i++/9+f);box(100,200,9);pop();}pop();}}//#p5t
*/
