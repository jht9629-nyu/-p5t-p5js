// MapGen (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_13_2020/MapGen/MapGen.pde
// #p5t/ArtSketch/10_13_2020/MapGen/MapGen.pde

let x, y, c, n = 480;
let f = 0,
  z,
  b;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  for (x = 0; x < n; x++)
    for (y = 0; y < n; ) {
      z = noise(x / 99, y / 99, f / 199);
      c =
        z < 0.5
          ? 0xff008be5 | 0
          : z < 0.53
          ? 0xffdee300 | 0
          : z < 0.7
          ? 0xff10af05 | 0
          : z < 0.8
          ? 0xffaf8b05 | 0
          : -1;
      for (b = 0; b < 1; b += 0.1) c = z > b && z < b + 0.005 ? jlerpColor(c, 0, 0.3) : c;
      jset(x, y++, c);
    }
  f++;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_13_2020/MapGen/MapGen.pde
/*
int x,y,c,n=480;float f,z,b;
void setup(){size(480,480);}
void draw(){
 for(x=0;x<n;x++)for(y=0;y<n;){z=noise(x/99f,y/99f,f/199f);
  c=z<.5?#008BE5:z<.53?#DEE300:z<.7?#10AF05:z<.8?#AF8B05:-1;
  for(b=0;b<1;b+=.1)c=z>b&z<b+.005?lerpColor(c,0,.3):c;
  set(x,y++,c);}f++;}//#p5t
*/
