// CowSpots (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_26_2020/CowSpots/CowSpots.pde
// #p5t/ArtSketch/10_26_2020/CowSpots/CowSpots.pde

let x, y, m = 0, a = -1, b, c, i;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  b = jcolorInt(0); // color(0): black
}

function draw() {
  if (m < 1) {
    c = a;
    a = b;
    b = c;
    jset(1, 1, a);
    jset(478, 479, a);
  }
  for (m = x = 0; x < 480; x++)
    for (y = 0; y < 480; y++)
      if (jget(x, y) == a)
        for (i = 0; i < 2 - (x % 2); i++)
          jset(
            x + Math.trunc(random(-2, 2)) * 2,
            y + Math.trunc(random(-2, 2)),
            a
          );
      else m++;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_26_2020/CowSpots/CowSpots.pde
/*
int x,y,m,a=-1,b=color(0),c,i;
void setup(){size(480,480);}
void draw(){
if(m<1){
 c=a;a=b;b=c;
 set(1,1,a);set(478,479,a);}
for(m=x=0;x<480;x++)for(y=0;y<480;y++)
 if(get(x,y)==a)
  for(i=0;i<2-x%2;i++)
    set(x+(int)random(-2,2)*2,y+(int)random(-2,2),a);
 else m++; 
}//#p5t
*/
