// Beach (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_10_2020/Beach/Beach.pde
// #p5t/ArtSketch/10_10_2020/Beach/Beach.pde

let x, y, i, n = 480;
let l = [0, 160, 320];

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  for (i = 0; i < 3; ) {
    for (x = 0; x < n; ) jset(x, ceil(l[i] + sin(x++ / 99) * 9), -1);
    l[i] += 2;
    l[i++] %= n;
  }
  for (x = 0; x < n; x++)
    for (y = 0; y < n; )
      // y++ happens before the color is worked out, so it reads the pixel below.
      jset(
        x,
        y++,
        y > 460 - noise(x / 99) * 30
          ? -1716703
          : jlerpColor(jget(x, y), -14567533, noise(x, y) / 9)
      );
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_10_2020/Beach/Beach.pde
/*
int x,y,i,n=480;int[] l={0,160,320};void setup(){size(480,480);}void draw(){for(i=0;i<3;){for(x=0;x<n;)set(x,ceil(l[i]+sin(x++/99f)*9),-1);l[i]+=2;l[i++]%=n;}for(x=0;x<n;x++)for(y=0;y<n;)set(x,y++,y>460-noise(x/99f)*30?-1716703:lerpColor(get(x,y),-14567533,noise(x,y)/9));}//#p5t
*/
