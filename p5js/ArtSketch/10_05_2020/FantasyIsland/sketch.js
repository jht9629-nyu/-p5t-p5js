// FantasyIsland (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_05_2020/FantasyIsland/FantasyIsland.pde
// #p5t/ArtSketch/10_05_2020/FantasyIsland/FantasyIsland.pde

let x, y, m = 0, c;
let f = 0,
  a,
  n = 99;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  colorMode(HSB, 9);
}

function draw() {
  if (m < 1) {
    f = 0;
    background(0); // clear()
    noiseSeed(Math.trunc(random(n)));
  }
  f += 0.02;
  x = m = 0;
  for (; x < 480; x++)
    for (y = 0; y < 480; y++) {
      a = noise(x / n, y / n);
      c = jget(x, y);
      if (a < f / 9 && jred(c) < 1) {
        jset(x, y, jcolor(((f + 0.6) * 0.67) % 9, 9, 9));
      }
      m += jhue(c) < 1 ? 1 : 0;
    }
}
//#p5t

//+(sin(x/99)+1)+(cos(y/99)+1);

// ---- Original Processing source: #p5t/ArtSketch/10_05_2020/FantasyIsland/FantasyIsland.pde
/*
int x,y,m,c;float f,a,n=99;void setup(){size(480,480);colorMode(3,9);}void draw(){if(m<1){f=0;clear();noiseSeed(int(random(n)));}f+=.02;x=m=0;for(;x<480;x++)for(y=0;y<480;y++){a=noise(x/n,y/n);c=get(x,y);if(a<f/9&red(c)<1){set(x,y,color(((f+.6)*.67)%9,9,9));}m+=hue(c)<1?1:0;}}//#p5t

//+(sin(x/99)+1)+(cos(y/99)+1);
*/
