// Pattern (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_16_2020/Pattern/Pattern.pde
// #p5t/ArtSketch/08_16_2020/Pattern/Pattern.pde

let s = new Array(10000).fill(0);
let f = 0,
  x,
  y,
  i,
  c = 250,
  h = 100;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, c);
  noStroke();
  for (x = 0; x < h; x++) {
    for (y = 0; y < h; y++) {
      i = x + y * h;
      if (f < 1) {
        s[i] = sin(x + y) * cos(x - y) * h;
      } else {
        fill((c * (s[i] % h)) / h, c, c);
        s[i]++;
        square(x * 5, y * 5, 9);
      }
    }
  }
  f++;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_16_2020/Pattern/Pattern.pde
/*
float[] s=new float[10000];
int f,x,y,i,c=250,h=100;

void draw(){
 frame.setSize(500,500);colorMode(HSB,c);noStroke();
 for(x=0;x<h;x++){
  for(y=0;y<h;y++){i=x+y*h;
   if(f<1){s[i]=sin(x+y)*cos(x-y)*h;}else{fill(c*(s[i]%h)/h,c,c);s[i]++;square(x*5,y*5,9);}
  }
 }
 f++;
}//#p5t
*/
