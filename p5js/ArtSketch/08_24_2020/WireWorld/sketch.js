// WireWorld (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_24_2020/WireWorld/WireWorld.pde
// #p5t/ArtSketch/08_24_2020/WireWorld/WireWorld.pde

let f = 99,
  x,
  z,
  a,
  b,
  t = 0,
  m = 240,
  c = 30;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  stroke(255); // stroke(-1)
  fill(0);
}

function draw() {
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (z = -m * 9; z < m * 9; z += c) {
    circle(z, f + sin(z / 2) * f + ((t / f) % f), 2);
    beginShape(TRIANGLE_STRIP);
    for (x = -m * 6; x < m * 9; x += c) {
      a = noise((z - t) / m, x / f) * m;
      vertex(x, m + a, z);
    }
    endShape();
  }
  t += c / 2;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_24_2020/WireWorld/WireWorld.pde
/*
float f=99,x,z,a,b,t,m=240,c=30;
void setup(){size(500,500,P3D);stroke(-1);fill(0);}
void draw(){clear();for(z=-m*9;z<m*9;z+=c){circle(z,f+sin(z/2)*f+(t/f)%f,2);beginShape(TRIANGLE_STRIP);for(x=-m*6;x<m*9;x+=c){a=noise((z-t)/m,x/f)*m;vertex(x, m+a, z);}endShape();}t+=c/2;}//#p5t
//float f=99,x,z,a,b,t,m=240,c=30;
//void setup(){
//  size(500, 500, P3D);stroke(-1);fill(0);
//}
//void draw(){
//  clear();
//  //directionalLight(0,m,m,1,1,0);
//  for(z=-m*9;z<m*2;z+=c){circle(z,f+sin(z/2)*f,1);
//    beginShape(TRIANGLE_STRIP);
//    for(x=-m*6;x<m*6;x+=c){
//      //if(a>100)fill(0,0,155);else fill(155,0,0);
//      //a=noise((x-sin(t/m)*c)/m,(z-t)/f)*m;
//      a=noise(x/m,(z-t)/f)*m;
//      vertex(x, m+a, z);
//    }
//    endShape(CLOSE);
//  }
//  t+=c/2;
//}
*/
