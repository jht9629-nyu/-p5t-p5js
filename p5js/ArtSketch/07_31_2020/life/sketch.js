// life (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_31_2020/life/life.pde
// #p5t/ArtSketch/07_31_2020/life/life.pde

let x, y, t, a, b;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(RGB, 1);
}

function draw() {
  const pixels = jloadPixels();
  for (x = 1; x < 499; x++) {
    for (y = 1; y < 499; y++) {
      t = 0;
      for (a = x - 1; a < x + 2; a++) {
        for (b = y - 1; b < y + 2; b++) {
          t = jint(t + jred(pixels[a + b * 500])); // int t += float
        }
      }
      t = t == 3 ? -1 : t != 4 ? jcolorInt(0) : 0;
      if (t < 0) jset(x, y, t);
      if ((((x * 2) & y) | ((-x * 2) & y)) < 1) jset(x, y, jcolorInt(1));
    }
  }
}

//int x,y,t,a,b;void setup(){size(500,500);colorMode(RGB,1);}void draw(){loadPixels();for(x=1;x<499;x++){for(y=1;y<499;y++){t=0;for(a=x-1;a<x+2;a++){for(b=y-1;b<y+2;b++){t+=red(get(a,b));}}t=t==3?-1:t!=4?color(0):0;if(t<0)set(x,y,t);if((x*2&y|-x*2&y)<1)set(x,y,color(1));}}}

// ---- Original Processing source: #p5t/ArtSketch/07_31_2020/life/life.pde
/*
int x,y,t,a,b;void setup(){size(500,500);colorMode(RGB,1);}void draw(){loadPixels();for(x=1;x<499;x++){for(y=1;y<499;y++){t=0;for(a=x-1;a<x+2;a++){for(b=y-1;b<y+2;b++){t+=red(pixels[a+b*500]);}}t=t==3?-1:t!=4?color(0):0;if(t<0)set(x,y,t);if((x*2&y|-x*2&y)<1)set(x,y,color(1));}}}

//int x,y,t,a,b;void setup(){size(500,500);colorMode(RGB,1);}void draw(){loadPixels();for(x=1;x<499;x++){for(y=1;y<499;y++){t=0;for(a=x-1;a<x+2;a++){for(b=y-1;b<y+2;b++){t+=red(get(a,b));}}t=t==3?-1:t!=4?color(0):0;if(t<0)set(x,y,t);if((x*2&y|-x*2&y)<1)set(x,y,color(1));}}}
*/
