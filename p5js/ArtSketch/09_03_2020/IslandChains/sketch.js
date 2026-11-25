// https://editor.p5js.org/jht9629-nyu/sketches/1SH62gtdO
// matt-parker-09_03-IslandChains
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_03_2020/IslandChains/IslandChains.pde
// #p5t/ArtSketch/09_03_2020/IslandChains/IslandChains.pde

// The original used frameRate(500); browsers cap draw() at ~60fps,
// so draw() runs tick() several times per frame to keep the original speed.
const STEPS_PER_FRAME = 8;


let f = 0, c = 250, m = 500, x, y, a = 0, b = 0;
let i = 0,
  n,
  w = 99;

function setup() {
  jcreateCanvas(500, 500);
  background(204); // Processing default background
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) tick();
  jsync();
}

// Named tick, not step: p5 2.x has a global step().
function tick() {
  if (i == 0 || a < 0) {
    jsync(); // write the pixels before p5 draws on top
    background(0, 150, c);
    a = b = c;
    noiseSeed(f);
  }
  jset(a, b, jcolor(f++ % w, w, w));
  i = 0;
  for (x = a - 1; x < a + 2; x++) {
    for (y = b - 1; y < b + 2; y++) {
      n = noise(x / w, y / w);
      if (jred(jget(x, y)) < 1 && n > i) {
        a = x;
        b = y;
        i = n;
      }
    }
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_03_2020/IslandChains/IslandChains.pde
/*
int f,c=250,m=500,x,y,a,b;float i,n,w=99;void setup(){size(500,500);frameRate(m);}void draw(){if(i==0|a<0){background(0,150,c);a=b=c;noiseSeed(f);}set(a,b,color(f++%w,w,w));i=0;for(x=a-1;x<a+2;x++)for(y=b-1;y<b+2;y++){n=noise(x/w,y/w);if(red(get(x,y))<1&n>i){a=x;b=y;i=n;}}}//#p5t
*/
