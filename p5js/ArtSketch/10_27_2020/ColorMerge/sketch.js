// ColorMerge (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_27_2020/ColorMerge/ColorMerge.pde
// #p5t/ArtSketch/10_27_2020/ColorMerge/ColorMerge.pde

let x, y, m = 0, j, a;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  colorMode(HSB, 99);
}

function draw() {
  if (m < 960) {
    a = jcolor(random(99), 99, 99);
    jset(239, 1, a);
    jset(240, 478, a);
  }
  for (m = x = 0; x++ < 480; )
    for (y = 0; y++ < 480; )
      if (jget(x, y) == a)
        for (j = 0; j++ < 1 - (x % 2) + 1; )
          jset(
            x + Math.trunc(random(-2, 2)) * 2,
            y + Math.trunc(random(-2, 2)),
            a
          );
      else m++;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_27_2020/ColorMerge/ColorMerge.pde
/*
int x,y,m,j,a;
void setup(){size(480,480);colorMode(3,99);}
void draw(){
if(m<960){a=color(random(99),99,99);set(239,1,a);set(240,478,a);}
for(m=x=0;x++<480;)for(y=0;y++<480;)if(get(x,y)==a)for(j=0;j++<(1-x%2)+1;)set(x+(int)random(-2,2)*2,y+(int)random(-2,2),a);else m++;}//#p5t
*/
