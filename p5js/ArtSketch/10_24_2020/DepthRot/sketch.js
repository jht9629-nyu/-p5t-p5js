// DepthRot (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_24_2020/DepthRot/DepthRot.pde
// #p5t/ArtSketch/10_24_2020/DepthRot/DepthRot.pde

let x,
  y,
  i;
let f = 0,
  t,
  n = 375.2;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(0); // clear()
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (x = -10; x < 20; x++)
    for (y = -10; y < 20; y++) {
      push();
      translate(x * 48, y * 48, f * n);
      t = 1 + ((x + y) % 2) * -2;
      rotateZ(((f * PI) / 2) * t);
      for (i = -1; i < 4; i++) {
        if (x != 5 && y != 5) box(48, 48, 9);
        translate(0, 0, -n);
      }
      pop();
    }
  f = f > 1 ? 0.01 : f + 0.01;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_24_2020/DepthRot/DepthRot.pde
/*
int x,y,i;float f,t,n=375.2;void setup(){size(480,480,P3D);clear();}void draw(){for(x=-10;x<20;x++)for(y=-10;y<20;y++){push();translate(x*48,y*48,f*n);t=1+((x+y)%2)*-2;rotateZ(f*PI/2*t);for(i=-1;i<4;i++){if(x!=5&&y!=5)box(48,48,9);translate(0,0,-n);}pop();}f=f>1?.01:f+.01;}//#p5t
*/
