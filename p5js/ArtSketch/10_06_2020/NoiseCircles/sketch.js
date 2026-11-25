// https://editor.p5js.org/jht9629-nyu/sketches/BOenJtbnc
// matt-parker-10_06-NoiseCircles
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_06_2020/NoiseCircles/NoiseCircles.pde
// #p5t/ArtSketch/10_06_2020/NoiseCircles/NoiseCircles.pde

let x, y, m = 1, c;
let f = 0,
  a,
  n = 99;

function setup() {
  jcreateCanvas(480, 480);
  background(204); // Processing default background
  jcolorMode(HSB, 9);
}

function draw() {
  if (m < 1) {
    noiseSeed(Math.trunc(f));
    f = -16;
    background(0); // clear()
  }
  f += 0.2;
  x = m = 0;
  for (; x < 480; x++) {
    for (y = 0; y < 480; y++) {
      a = noise(x / 9, y / 9) + sin(x / 9) + cos(y / 9);
      c = jget(x, y);
      if (a < f / 9 && jhue(c) < 1) {
        jset(x, y, jcolor((f * 0.6) % 9, 9, 9));
        m++;
      }
    }
  }
  jsync();
}

// ---- Original Processing source: #p5t/ArtSketch/10_06_2020/NoiseCircles/NoiseCircles.pde
/*
int x,y,m=1,c;float f,a,n=99;void setup(){size(480,480);colorMode(3,9);}void draw(){if(m<1){noiseSeed(int(f));f=-16;clear();}f+=.2;x=m=0;for(;x<480;x++)for(y=0;y<480;y++){a=noise(x/9f,y/9f)+sin(x/9f)+cos(y/9f);c=get(x,y);if(a<f/9&hue(c)<1){set(x,y,color((f*.6)%9,9,9));m++;}}}
*/
