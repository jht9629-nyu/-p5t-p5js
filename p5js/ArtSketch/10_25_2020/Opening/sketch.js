// Opening (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_25_2020/Opening/Opening.pde
// #p5t/ArtSketch/10_25_2020/Opening/Opening.pde

let x,
  y,
  i,
  c = 96;
let f = 0,
  t,
  n = 375;

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (x = -8; x++ < 16; )
    for (y = -8; y++ < 16; ) {
      push();
      translate(x * c + c, y * c + c, (f + 0.5) * n);
      t = 1 + ((x + y) % 2) * -2;
      rotateZ(((f * PI) / 2) * t);
      for (i = -2; i++ < 4; ) {
        if (y % 3 != 0 && x % 3 != 0) box(c, c, 9);
        translate(0, 0, -n);
      }
      pop();
    }
  f = f > 1 ? 0.005 : f + 0.005;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_25_2020/Opening/Opening.pde
/*
int x,y,i,c=96;float f,t,n=375;void setup(){size(480,480,P3D);}void draw(){for(x=-8;x++<16;)for(y=-8;y++<16;){push();translate(x*c+c,y*c+c,(f+.5)*n);t=1+((x+y)%2)*-2;rotateZ(f*PI/2*t);for(i=-2;i++<4;){if(y%3!=0&x%3!=0)box(c,c,9);translate(0,0,-n);}pop();}f=f>1?.005:f+.005;}//#p5t
*/
