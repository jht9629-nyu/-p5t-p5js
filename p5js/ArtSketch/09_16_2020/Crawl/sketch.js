// Crawl (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_16_2020/Crawl/Crawl.pde
// #p5t/ArtSketch/09_16_2020/Crawl/Crawl.pde

let x, y, b, m, c, n = 500, k = 0xff000000 | 0; // k = #000000

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
}

function draw() {
  for (m = x = 0; x < n; x++)
    for (y = 0; y < n; y++)
      if (jred(jget(x, y)) > 0) {
        for (b = 0; b < 99; b++) {
          if (b < 65) c = -1;
          else c = k;
          jset(Math.trunc(x + random(-2, 2)), Math.trunc(y + random(-2, 2)), c);
        }
        jset(x, y, k);
      } else m++;
  if (m >= n * n) {
    background(0); // clear()
    circle(400, 400, 199);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_16_2020/Crawl/Crawl.pde
/*
int x,y,b,m,c,n=500,k=#000000;void setup(){size(500,500);}void draw(){for(m=x=0;x<n;x++)for(y=0;y<n;y++)if(red(get(x,y))>0){for(b=0;b<99;b++){if(b<65)c=-1;else c=k;set(int(x+random(-2,2)),int(y+random(-2,2)),c);}set(x,y,k);}else m++;if(m>=n*n){clear();circle(400,400,199);}}//#p5t
*/
