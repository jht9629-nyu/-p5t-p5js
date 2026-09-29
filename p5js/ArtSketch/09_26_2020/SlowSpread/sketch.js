// SlowSpread (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_26_2020/SlowSpread/SlowSpread.pde
// #p5t/ArtSketch/09_26_2020/SlowSpread/SlowSpread.pde

let x, y, i = 0, a, b, o = -1, p = 0, t, c = 1, n = 500, m;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  m = x = 0;
  for (; x < n; x++)
    for (y = 0; y < n; y++) {
      t = Math.trunc(jred(jget(x, y)));
      if (c > 0 ? t > 0 : t < 255) {
        a = x + (i % 3) - 1;
        b = y + idiv(i++, 3) - 1;
        jset(a, b, jcolor(jred(jget(a, b)) + c));
        i %= 9;
        m++;
      }
    }
  if (m == n * n) {
    t = o;
    o = p;
    p = t;
    c *= -1;
    jbackground(p);
    jset(99, 99, o);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_26_2020/SlowSpread/SlowSpread.pde
/*
int x,y,i,a,b,o=-1,p=0,t,c=1,n=500,m; 
void draw(){m=x=0;
 for(;x<n;x++)for(y=0;y<n;y++){t=(int)red(get(x,y));
 if(c>0?t>0:t<255){a=x+i%3-1;b=y+i++/3-1;set(a,b,color(red(get(a,b))+c));i%=9;m++;}}
 if(m==n*n){t=o;o=p;p=t;c*=-1;background(p);set(99,99,o);}frame.setSize(n,n);}//#p5t
*/
