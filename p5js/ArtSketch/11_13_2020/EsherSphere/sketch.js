// EsherSphere (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_13_2020/EsherSphere/EsherSphere.pde
// #p5t/ArtSketch/11_13_2020/EsherSphere/EsherSphere.pde

let w = 480, j, i, p = 0, z = 0;
let x = 0,
  y = 0,
  d = 0,
  t = 0,
  n = 240;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
}

function draw() {
  p++;
  // The loop updates run after each body, so every pixel uses the values
  // worked out for the pixel before it.
  for (j = 0; j < w; j++, y = (2 * j) / w - 1)
    for (
      i = 0;
      i < w;
      i++,
        x = (2 * i) / w - 1,
        d = sqrt(x * x + y * y),
        t = ((3 - sqrt(4 - 5 * d * d)) / (d * d + 1)) * w,
        z = jint(y * t + p) ^ jint(x * t - p)
    )
      jset(
        i,
        j,
        dist(i, j, n, n) > 240
          ? jcolor((i + (j % 50)) % (idiv(p, 2) % n))
          : jcolorInt(z & (w + p))
      );
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_13_2020/EsherSphere/EsherSphere.pde
/*
int w=480,j,i,p,z;float x,y,d,t,n=240;void setup(){size(480,480);}void draw(){p++;for(j=0;j<w;j++,y=2f*j/w-1)for(i=0;i<w;i++,x=2f*i/w-1,d=sqrt(x*x+y*y),t=(3-sqrt(4-5*d*d))/(d*d+1)*w,z=int(y*t+p)^int(x*t-p))set(i,j,dist(i,j,n,n)>240?color((i+j%50)%((p/2)%n)):color(z&w+p));}//#p5t
*/
