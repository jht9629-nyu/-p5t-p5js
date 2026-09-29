// PixelBased (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/Samples/PixelBased/PixelBased.pde
// #p5t/Samples/PixelBased/PixelBased.pde

let x, y, t = 0;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, 99); // colorMode(3, 99)
}

function draw() {
  t++;
  jloadPixels(); // loadPixels(); the snapshot isn't used
  for (x = 1; x < 499; x++)
    for (y = 1; y < 499; y++)
      if (t % 499 == y) jset(x, y, jcolor(random(99), 99, 99));
      // Adding 9 to the int color brightens blue, carrying into green and red.
      else jset(x, y, (jget(x, y) + 9) | 0);
}

// ---- Original Processing source: #p5t/Samples/PixelBased/PixelBased.pde
/*
int x, y, t;
void setup() {
  size(500, 500);
  colorMode(3,99);
}
void draw() {
  t++;
  loadPixels();
  for (x=1; x<499; x++)
    for (y=1; y<499; y++)
      if(t%499==y)
        set(x, y, color(random(99),99,99));
      else
        set(x, y, (get(x,y)+9));
}
*/
