// Mandlebrot (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_19_2021/Mandlebrot/Mandlebrot.pde
// #p5t/ArtSketch/05_19_2021/Mandlebrot/Mandlebrot.pde

let s = 480,
  m = 99,
  j,
  i,
  h = 0,
  c;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
}

function draw() {
  let o = -1.5,
    d = 3 / s,
    y = o,
    x;
  h++;
  c = h;
  for (j = 0; j++ < s; ) {
    x = o;
    for (i = 0; i++ < s; ) {
      let a = x,
        b = y,
        n = 0,
        l = 4;
      while (n++ < m) {
        let q = a * a,
          u = b * b,
          z = sqrt(q + u),
          v = 2 * a * b;
        if (z > l) break;
        a = q - u + x;
        b = v + y;
        q = z;
      }
      // The ints are drawn as raw ARGB colors, shown at full alpha.
      jset(i, j, n < m ? c-- : Math.imul(-c, s));
      x += d;
    }
    y += d;
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/05_19_2021/Mandlebrot/Mandlebrot.pde
/*
int s=480,m=99,j,i,h,c;void setup(){size(480,480);}
void draw(){float o=-1.5,d=3f/s,y=o,x;h++;c=h;for(j=0;j++<s;){x=o;for(i=0;i++<s;){float a=x,b=y,n=0,l=4;while(n++<m){float q=a*a,u=b*b,z=sqrt(q+u),v=2*a*b;if(z>l)break;a=q-u+x;b=v+y;q=z;}set(i,j,n<m?c--:-c*s);x+=d;}y+=d;}}//#p5t
*/
