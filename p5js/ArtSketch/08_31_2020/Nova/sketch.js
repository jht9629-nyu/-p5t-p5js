// Nova (p5.js 2.3.4 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_31_2020/Nova/Nova.pde
// #p5t/ArtSketch/08_31_2020/Nova/Nova.pde

let x, y, f = 0, c, n = 500;
let a = 0,
  b = 0,
  d;

function setup() {
  jcreateCanvas(500, 500);
  background(204); // Processing default background
}

function draw() {
  f++;
  for (x = 0; x < n; x++) {
    for (y = 0; y < n; y++) {
      d = dist(x, y, a, b);
      c = -1;
      if (d < f || d > f + 1)
        c = jcolor(jred(jget(x, y)) - noise(x / 9, y / 9) * 5 - random(5));
      jset(x, y, c);
    }
  }
  if (f > n) {
    f = 0;
    a = random(99, 400);
    b = random(99, 400);
    jsync(); // write the pixels before p5 draws on top
    circle(a, b, 50);
  }
  jsync();
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_31_2020/Nova/Nova.pde
/*
int x,y,f,c,n=500;float a,b,d;
void setup(){size(500,500);}
void draw(){f++;
for(x=0;x<n;x++)
for(y=0;y<n;y++){d=dist(x,y,a,b);c=-1;
if(d<f|d>f+1)c=color(red(get(x,y))-noise(x/9f,y/9f)*5-random(5));set(x,y,c);}
if(f>n){f=0;a=random(99,400);b=random(99,400);circle(a,b,50);}}//#p5t
*/
