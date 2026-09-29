// Covid (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_08_2020/Covid/Covid.pde
// #p5t/ArtSketch/08_08_2020/Covid/Covid.pde

let f = 0,
  m,
  x,
  y,
  c,
  a,
  b = -1,
  o,
  p = b,
  s;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  a = jcolorInt(1); // color(1): gray 1
  o = a;
}

function draw() {
  m = 0;
  for (x = 0; x < 500; x++) {
    for (y = 0; y < 500; y++) {
      if (f < 1) {
        c = random(1) < 0.00001 ? o : p;
        jset(x, y, c);
      }
      if (jget(x, y) == o)
        jset(floor(random(4)) - 2 + x, floor(random(4)) - 2 + y, o);
      else m++;
    }
  }
  if (m < 1 || m > 249999) {
    f = 0;
    s = o;
    o = p;
    p = s;
  } else f++;
}

// ---- Original Processing source: #p5t/ArtSketch/08_08_2020/Covid/Covid.pde
/*
int f,m,x,y,c,a=color(1),b=-1,o=a,p=b,s;void setup(){size(500,500);}void draw(){m=0;for(x=0;x<500;x++){for(y=0;y<500;y++){if(f<1){c=random(1)<.00001?o:p;set(x,y,c);}if(get(x,y)==o)set((int)random(4)-2+x,(int)random(4)-2+y,o);else m++;}}if(m<1|m>249999){f=0;s=o;o=p;p=s;}else f++;}
*/
