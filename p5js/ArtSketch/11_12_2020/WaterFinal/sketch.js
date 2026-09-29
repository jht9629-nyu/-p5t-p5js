// WaterFinal (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_12_2020/WaterFinal/WaterFinal.pde
// #p5t/ArtSketch/11_12_2020/WaterFinal/WaterFinal.pde

let x, y, i, w = 480, f = 0;
let b = new Int32Array(w * w),
  n = new Int32Array(w * w),
  t;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480); // frame.setSize(480, 480) in draw()
  background(204); // Processing default background
}

function draw() {
  f++;
  for (y = 0; ++y < w - 1 && f > 1; )
    for (x = 0; ++x < w - 1; ) {
      b[(i = x + y * w)] += dist(x, y, sin(f) * w, (cos(f) * w) / 2) < 6 ? w : 0;
      b[i] = idiv((n[i + 1] + n[i - 1] + n[x + (y + 1) * w] + n[x + (y - 1) * w]) | 0, 2) - b[i];
      jset(x, y, jcolor(0, idiv(b[i], 9), w));
    }
  t = n;
  n = b;
  b = t;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_12_2020/WaterFinal/WaterFinal.pde
/*
int x,y,i,w=480,f;
int[]b=new int[w*w],n=new int[w*w],t;
void draw(){f++;frame.setSize(w,w);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){b[i=x+y*w]+=dist(x,y,sin(f)*w,cos(f)*w/2)<6?w:0;b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i];set(x,y,color(0,b[i]/9,w));}t=n;n=b;b=t;}//#p5t
*/
