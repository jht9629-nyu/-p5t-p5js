// NotGreat (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_17_2020/NotGreat/NotGreat.pde
// #p5t/ArtSketch/11_17_2020/NotGreat/NotGreat.pde

let x, y, i, w = 480, p, a, f = 0;
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
      a = b[(i = x + y * w)] += dist(x, y, 240, f % w) < 4 ? w : 0;
      b[i] = p = 0;
      for (; p < 9; ) b[i] += idiv(n[x + (p % 3) - 1 + (y + idiv(p++, 3) - 1) * w], 9);
      b[i] -= a;
      jset(x, y, jcolor(idiv(b[i], 2), 0, 0));
    }
  t = n;
  n = b;
  b = t;
}
//#p5t

//int x, y, i, w=480,p,a,f;
//int[]b=new int[w*w],n=new int[w*w],t;
//void draw() {
//  f++;
//  frame.setSize(w, w);
//  for (y=0;++y<w-1&f>1;)for(x=0;++x<w-1; ){
//    b[i=x+y*w]+=dist(x,y,240+sin(f/9f)*(f%w),240+cos(f/9f)*(f%w))<6?w:0;
//    a=b[i];
//    b[i]=p=0;
//    for(;p<9;p++)b[i]+=n[(x+p%3-1)+(y+p/3-1)*w];
//    b[i]=b[i]/7-a;
//    set(x, y,color(b[i]/2,0,0));
//  }
//  t=n;
//  n=b;
//  b=t;
//}//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_17_2020/NotGreat/NotGreat.pde
/*
int x,y,i,w=480,p,a,f;int[]b=new int[w*w],n=new int[w*w],t;void draw(){f++;frame.setSize(w,w);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){a=b[i=x+y*w]+=dist(x,y,240,f%w)<4?w:0;b[i]=p=0;for(;p<9;)b[i]+=n[(x+p%3-1)+(y+p++/3-1)*w]/9;b[i]-=a;set(x,y,color(b[i]/2,0,0));}t=n;n=b;b=t;}//#p5t

//int x, y, i, w=480,p,a,f;
//int[]b=new int[w*w],n=new int[w*w],t;
//void draw() {
//  f++;
//  frame.setSize(w, w);
//  for (y=0;++y<w-1&f>1;)for(x=0;++x<w-1; ){
//    b[i=x+y*w]+=dist(x,y,240+sin(f/9f)*(f%w),240+cos(f/9f)*(f%w))<6?w:0;
//    a=b[i];
//    b[i]=p=0;
//    for(;p<9;p++)b[i]+=n[(x+p%3-1)+(y+p/3-1)*w];
//    b[i]=b[i]/7-a;
//    set(x, y,color(b[i]/2,0,0));
//  }
//  t=n;
//  n=b;
//  b=t;
//}//#p5t
*/
