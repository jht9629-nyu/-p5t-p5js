// https://editor.p5js.org/jht9629-nyu/sketches/H1RP64ChY
// matt-parker-08_17-LavaLamp
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_17_2020/LavaLamp/LavaLamp.pde
// #p5t/ArtSketch/08_17_2020/LavaLamp/LavaLamp.pde

let s = new Float32Array(500 * 500);
let f = 0,
  x,
  y,
  i,
  c = 250,
  h = 500,
  v = h * 2,
  o = 150;

function setup() {
  jcreateCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  jcolorMode(HSB, v);
  for (x = 0; x < h; x++) {
    for (y = 0; y < h; y++) {
      i = x + y * h;
      if (f < 1)
        s[i] =
          sin((x + y) / (o + sin(f) * o)) * cos((x - y) / (o + sin(f) * o)) * v;
      else jset(x, y, jcolor((v * (s[i] % v)) / v, v, v));
      s[i]++;
    }
  }
  f++;
  jsync();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_17_2020/LavaLamp/LavaLamp.pde
/*
float[] s=new float[500*500];
int f,x,y,i,c=250,h=500,v=h*2,o=150;
void draw(){
frame.setSize(h,h);colorMode(HSB,v);
for(x=0;x<h;x++){for(y=0;y<h;y++){i=x+y*h;if(f<1)s[i]=sin((x+y)/(o+sin(f)*o))*cos((x-y)/(o+sin(f)*o))*v;else set(x,y,color(v*(s[i]%v)/v,v,v));s[i]++;}}
f++;}//#p5t
*/
