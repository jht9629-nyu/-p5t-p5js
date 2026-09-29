// NoiseShift (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_20_2020/NoiseShift/NoiseShift.pde
// #p5t/ArtSketch/10_20_2020/NoiseShift/NoiseShift.pde

let x, y, c = 480, f = 0, a, b, z, i;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  f++;
  for (x = 0; x < c; x++)
    for (i = 0; i < 9; i += 2) {
      a = i * 48;
      b = (i + 1) * 48;
      z = (i + 2) * 48;
      jset(x, a, jcolor(noise(x / 9, (f + a) / 9) * c, 0, f % c));
      for (y = a + 1; y < b; y++) jset(x, y, jcolorInt(jget(x, y - 1), 254));
      for (y = z; y >= b; y--) jset(x, y, jcolorInt(jget(x, y - 1)));
    }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_20_2020/NoiseShift/NoiseShift.pde
/*
int x,y,c=480,f,a,b,z,i;
void setup(){size(480,480);}
void draw(){f++;for(x=0;x<c;x++)for(i=0;i<9;i+=2){a=i*48;b=(i+1)*48;z=(i+2)*48;set(x,a,color(noise(x/9f,(f+a)/9f)*c,0,f%c));for(y=a+1;y<b;y++)set(x,y,color(get(x,y-1),254));for(y=z;y>=b;y--)set(x,y,color(get(x,y-1)));}}//#p5t
*/
