// Tunnel (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_23_2020/Tunnel/Tunnel.pde
// #p5t/ArtSketch/07_23_2020/Tunnel/Tunnel.pde

let f = 0,
  c = 0;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  stroke(255, 99);
  frustum(-25, 25, -25, 25, 43, 9330);
  linePerspective(false); // Processing P3D strokes keep a constant width
  noFill();
}

function draw() {
  f -= 0.5;
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (let i = 0; i < 2000; i++) {
    push();
    translate(noise(c) * 99, cos(-c) * 50, 30 * (i - 1000));
    c = (i + f) / 9;
    circle(0, 0, 800);
    pop();
  }
}

// ---- Original Processing source: #p5t/ArtSketch/07_23_2020/Tunnel/Tunnel.pde
/*
float f,c;

void setup(){size(500,500,P3D);stroke(255,99);frustum(-25,25,-25,25,43,9330);noFill();}

void draw(){f-=.5;
  clear();
  for(int i=0;i<2000;i++){
    pushMatrix();
    translate(noise(c)*99,cos(-c)*50,30*(i-1000));
    c=(i+f)/9;circle(0,0,800);
    popMatrix();
  }
}
*/
