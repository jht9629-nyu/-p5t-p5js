// Finale (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_18_2020/Finale/Finale.pde
// #p5t/ArtSketch/11_18_2020/Finale/Finale.pde

let x, y, t, a, b;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  fill(0);
}

function draw() {
  for (x = 1; ++x < 479; )
    for (y = 1; ++y < 479; ) {
      t = 0;
      for (a = x - 1; a < x + 2; a++)
        for (b = y - 1; b < y + 2; ) t += jred(jget(a, b++)) > 0 ? 1 : 0;
      t = t == 3 ? -1 : t != 4 ? 0 : jcolor(255, jred(jget(x, y)) - 9, 0);
      jset(x, y, jcolorInt(t));
    }
  circle(random(480), random(480), 75);
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_18_2020/Finale/Finale.pde
/*
int x,y,t,a,b;
void setup(){size(480,480);fill(0);}
void draw(){
for(x=1; ++x<479;)for(y=1;++y<479;){t=0;
 for(a=x-1;a<x+2;a++)for(b=y-1;b<y+2;)t+=red(get(a,b++))>0?1:0;
 t=t==3?-1:t!=4?0:color(255,red(get(x,y))-9,0);
 set(x,y,color(t));}circle(random(480),random(480),75);}//#p5t
*/
