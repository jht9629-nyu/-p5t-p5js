// Landscape (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_12_2020/Landscape/Landscape.pde
// #p5t/ArtSketch/08_12_2020/Landscape/Landscape.pde

let f = 0,
  x,
  y,
  z,
  t = 999,
  l = 50;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
}

function draw() {
  background(125);
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += l;
  circle((f / l) % t, l, l);
  for (x = 0; x < t * 3; x += l) {
    for (y = 0; y < t; y += l) {
      for (z = 0; z < t * 2; z += l) {
        push();
        translate(x - t, t - y, z - t * 2 - 250);
        let n = noise(x / t, y / t, (z - f) / t) * t;
        if (n > y) {
          box(l);
        }
        pop();
      }
    }
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_12_2020/Landscape/Landscape.pde
/*
float f,x,y,z,t=999,l=50;
void setup(){size(500,500,P3D);}
void draw(){background(125);f+=l;circle((f/l)%t,l,l);
for(x=0;x<t*3;x+=l){for(y=0;y<t;y+=l){for(z=0;z<t*2;z+=l){push();
 translate(x-t,t-y,z-t*2-250);
 float n=noise(x/t,y/t,(z-f)/t)*t;
 if(n>y){box(l);}pop();}}}}//#p5t
*/
