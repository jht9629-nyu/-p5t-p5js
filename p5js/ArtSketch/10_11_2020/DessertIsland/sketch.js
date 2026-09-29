// DessertIsland (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_11_2020/DessertIsland/DessertIsland.pde
// #p5t/ArtSketch/10_11_2020/DessertIsland/DessertIsland.pde

let x, y, n = 480, l = 0;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
}

function draw() {
  l++;
  l %= 220;
  for (x = 0; x < n; ) {
    for (y = 0; y < n; )
      jset(
        x,
        y++,
        y > 280 - noise(x / 9) * 9
          ? jlerpColor(0xffe5ce21 | 0, 0xff006300 | 0, noise(x / 9, y / 9))
          : y > 240 - noise(x / 99) * 30
          ? 0xffe5ce21 | 0
          : jlerpColor(jget(x, y), 0xff0ce2e8 | 0, noise(x, y) / 9)
      );
    jset(x++, Math.trunc(l + sin(x / 99) * 9), -1);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_11_2020/DessertIsland/DessertIsland.pde
/*
int x,y,n=480,l;void setup(){size(480,480);}void draw(){l++;l%=220;for(x=0;x<n;){for(y=0;y<n;)set(x,y++,y>280-noise(x/9f)*9?lerpColor(#E5CE21,#006300,noise(x/9f,y/9f)):y>240-noise(x/99f)*30?#E5CE21:lerpColor(get(x,y),#0CE2E8,noise(x,y)/9));set(x++,int(l+sin(x/99f)*9),-1);}}//#p5t
*/
