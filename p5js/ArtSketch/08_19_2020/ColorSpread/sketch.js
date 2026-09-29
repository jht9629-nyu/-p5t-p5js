// ColorSpread (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_19_2020/ColorSpread/ColorSpread.pde
// #p5t/ArtSketch/08_19_2020/ColorSpread/ColorSpread.pde

let x, y, t;
let h, s, b, d, f = 0, c = 255;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, c);
}

function draw() {
  f++;
  f = f % c;
  for (x = 0; x < 500; x++) {
    for (y = 0; y < 500; y++) {
      t = jget(x, y);
      h = jhue(t);
      s = c;
      b = jbrightness(t);
      d = dist(x, y, c, c);
      b += d < f && d > f * 0.4 ? 2 : -4;
      jset(
        Math.trunc(random(4) - 2) + x,
        Math.trunc(random(4) - 2) + y,
        jcolor(h + 1, c, b)
      );
    }
  }
}
//int x,y,t,c;float h,s,b,d,f,a=255;
//void setup(){
//  size(500,500);colorMode(HSB,a);
//}
//void draw(){
//  f++;f=f%a;
//  for(x=0;x<500;x++){
//    for(y=0;y<500;y++){
//      t=get(x,y);h=hue(t);s=saturation(t);b=brightness(t);
//      d=dist(x,y,a,a);
//      c=(d<f&d>f*.4)?color(h+1,s+2,b+2):color(h,s,b-4);
//      set(int(random(4)-2)+x,int(random(4)-2)+y,c);
//    }
//  }
//}

// ---- Original Processing source: #p5t/ArtSketch/08_19_2020/ColorSpread/ColorSpread.pde
/*
int x,y,t;float h,s,b,d,f,c=255;

void setup(){size(500,500);colorMode(HSB,c);}
void draw(){f++;f=f%c;for(x=0;x<500;x++){for(y=0;y<500;y++){t=get(x,y);h=hue(t);s=c;b=brightness(t);d=dist(x,y,c,c);b+=(d<f&d>f*.4)?2:-4;
 set(int(random(4)-2)+x,int(random(4)-2)+y,color(h+1,c,b));}}}
//int x,y,t,c;float h,s,b,d,f,a=255;
//void setup(){
//  size(500,500);colorMode(HSB,a);
//}
//void draw(){
//  f++;f=f%a;
//  for(x=0;x<500;x++){
//    for(y=0;y<500;y++){
//      t=get(x,y);h=hue(t);s=saturation(t);b=brightness(t);
//      d=dist(x,y,a,a);
//      c=(d<f&d>f*.4)?color(h+1,s+2,b+2):color(h,s,b-4);
//      set(int(random(4)-2)+x,int(random(4)-2)+y,c);
//    }
//  }
//}
*/
