// Rings (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_11_2020/Rings/Rings.pde
// #p5t/ArtSketch/09_11_2020/Rings/Rings.pde

let f = 0, m, x, y, c, o = 0xff000000 | 0, p = -1, n = 500; // o = #000000

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  for (x = m = 0; x++ < n; )
    for (y = 0; y < n; ) {
      if (f < 2) {
        c = Math.trunc(dist(x, y, 250, 250));
        c = c == 99 || c == 199 || c > 300 ? o : p;
        jset(x, y, c);
      }
      if (jget(x, y++) == o)
        jset(floor(random(4)) - 2 + x, floor(random(4)) - 2 + y, o);
      else m++;
    }
  f++;
  if (m <= n) {
    c = o;
    o = p;
    f = 1;
    p = c;
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_11_2020/Rings/Rings.pde
/*
int f,m,x,y,c,o=#000000,p=-1,n=500;
void draw(){
for(x=m=0;x++<n;)for(y=0;y<n;){
if(f<2){c=(int)dist(x,y,250,250);c=c==99|c==199|c>300?o:p;set(x,y,c);}if(get(x,y++)==o)set((int)random(4)-2+x,(int)random(4)-2+y,o);else m++;}
f++;if(m<=n){c=o;o=p;f=1;p=c;}frame.setSize(n,n);}//#p5t
*/
