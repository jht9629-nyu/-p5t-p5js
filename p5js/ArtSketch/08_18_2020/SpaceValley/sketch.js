// SpaceValley (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_18_2020/SpaceValley/SpaceValley.pde
// #p5t/ArtSketch/08_18_2020/SpaceValley/SpaceValley.pde

let f = 99,
  x,
  z,
  a,
  b,
  t = 0,
  m = 275;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  stroke(0, f);
}

function draw() {
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (x = 0; x < m * 3; x += 9) {
    beginShape(QUAD_STRIP);
    for (z = -m * 9; z < m * 2; z += 9) {
      a = noise(x / f, (z - t) / f) * cos(x / 50 - 5) * f;
      b = noise((x + 9) / f, (z - t) / f) * cos((x + 9) / 50 - 5) * f;
      vertex(x, m + a, z);
      vertex(x + 9, m + b, z);
    }
    endShape();
  }
  t += 9;
}

//stroke(255);point(sin(x)*500,x/3);noStroke();
//fill(9);circle(40,f,40);

// ---- Original Processing source: #p5t/ArtSketch/08_18_2020/SpaceValley/SpaceValley.pde
/*
float f=99,x,z,a,b,t,m=275;void setup(){size(500,500,P3D);stroke(0,f);}void draw(){clear();for(x=0;x<m*3;x+=9){beginShape(18);for(z=-m*9;z<m*2;z+=9){a=noise(x/f,(z-t)/f)*cos(x/50-5)*f;b=noise((x+9)/f,(z-t)/f)*cos((x+9)/50-5)*f;vertex(x,m+a,z);vertex(x+9,m+b,z);}endShape();}t+=9;}

//stroke(255);point(sin(x)*500,x/3);noStroke();
//fill(9);circle(40,f,40);
*/
