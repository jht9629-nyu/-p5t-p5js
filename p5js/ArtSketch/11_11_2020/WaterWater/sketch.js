// WaterWater (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_11_2020/WaterWater/WaterWater.pde
// #p5t/ArtSketch/11_11_2020/WaterWater/WaterWater.pde

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
      b[(i = x + y * w)] += dist(x, y, sin(f) * w, sin(f) * w) < 6 ? w : 0;
      b[i] = idiv((n[i + 1] + n[i - 1] + n[x + (y + 1) * w] + n[x + (y - 1) * w]) | 0, 2) - b[i];
      jset(x, y, jcolor(0, 99, b[i]));
    }
  t = n;
  n = b;
  b = t;
}
//#p5t

/*
int x,y,i,j,w=480,f,k,p;
int[]b=new int[w*w],n=new int[w*w],t;

void setup(){size(480,480);}

void draw(){
  p=k=240+int(sin(f++)*99);

  for(y=0;++y<w-1;)
    for(x=0;++x<w-1;){
      b[i=x+y*w]+=dist(x,y,p,k)<9?999:0;
      set(x,y,b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i]);

      if(i==240+240*480){
        println(b[i]);
      }
    }
t=n;n=b;b=t;
}
*/

// ---- Original Processing source: #p5t/ArtSketch/11_11_2020/WaterWater/WaterWater.pde
// int x,y,i,w=480,f;int[]b=new int[w*w],n=new int[w*w],t;
// void draw(){f++;frame.setSize(480,480);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){b[i=x+y*w]+=dist(x,y,sin(f)*w,sin(f)*w)<6?w:0;b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i];set(x,y,color(0,99,b[i]));}t=n;n=b;b=t;}//#p5t
//
// void setup(){size(480,480);}
// /*
// int x,y,i,j,w=480,f,k,p;
// int[]b=new int[w*w],n=new int[w*w],t;
//
// void setup(){size(480,480);}
//
// void draw(){
//   p=k=240+int(sin(f++)*99);
//
//   for(y=0;++y<w-1;)
//     for(x=0;++x<w-1;){
//       b[i=x+y*w]+=dist(x,y,p,k)<9?999:0;
//       set(x,y,b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i]);
//
//       if(i==240+240*480){
//         println(b[i]);
//       }
//     }
// t=n;n=b;b=t;
// }
// */
