// WaterOne (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_10_2020/WaterOne/WaterOne.pde
// #p5t/ArtSketch/11_10_2020/WaterOne/WaterOne.pde

// The original used frameRate(99); browsers cap draw() at ~60fps,
// so draw() runs several steps per frame to keep the original speed.
const STEPS_PER_FRAME = 2;


let x, y, i, w = 480;
let b = new Int32Array(w * w),
  n = new Int32Array(w * w),
  t;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  for (let k = 0; k < STEPS_PER_FRAME; k++) step();
}

function step() {
  b[240 * w + 240] += w * w;
  for (y = 0; ++y < w - 1; )
    for (x = 0; ++x < w - 1; ) {
      i = x + y * w;
      // Java int sum (wraps), then a float multiply cast back with int()
      b[i] = jint(((n[i + 1] + n[i - 1] + n[x + (y + 1) * w] + n[x + (y - 1) * w]) | 0) * 0.5 - b[i]);
      jset(x, y, b[i]);
    }
  t = n;
  n = b;
  b = t;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_10_2020/WaterOne/WaterOne.pde
/*
int x,y,i,w=480;int[] b=new int[w*w],n=new int[w*w],t;public void setup(){size(480,480);frameRate(99);}public void draw(){b[240*w+240] += w*w;for(y=0;++y<w-1;)for(x=0;++x<w-1;){i=x+y*w;b[i]=int((n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])*.5-b[i]);set(x,y,b[i]);}t=n;n=b;b=t;}//#p5t
*/
