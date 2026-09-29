// ColorSpace (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_21_2020/ColorSpace/ColorSpace.pde
// #p5t/ArtSketch/10_21_2020/ColorSpace/ColorSpace.pde

// p5 WEBGL can only draw text with a loaded font file; DejaVu Sans stands in
// for Processing's default sans-serif.
let font;
let x,
  y,
  f = 0,
  d,
  c,
  s = 1;

function preload() {
  font = loadFont(
    'https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf'
  );
}

function setup() {
  createCanvas(480, 480, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
  background(204); // Processing default background
  colorMode(HSB, 99);
  textFont(font);
  textSize(12);
}

function draw() {
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  f += s;
  if (f < 0 || f > 310) s *= -1;
  c = f % 2;
  for (x = 0; x < 480; x += 9) {
    d = 480 - f;
    if (d % 2 < 1) d = f;
    push();
    if (c < 1) translate(x, d, f);
    else translate(d, x, f);
    fill((f + x) % 99, 99, 99, 9);
    text('#p5t', 0, 0);
    pop();
  }
}

// ---- Original Processing source: #p5t/ArtSketch/10_21_2020/ColorSpace/ColorSpace.pde
/*
int x,y,f,d,c,s=1;
void setup(){size(480,480,P3D);colorMode(3,99);}
void draw(){
 f+=s;if(f<0|f>310)s*=-1;c=f%2;
 for(x=0;x<480;x+=9){
  d=480-f;if(d%2<1)d=f;
  push();
  if(c<1)translate(x,d,f);else translate(d,x,f);
  fill((f+x)%99,99,99,9);
  text("#p5t",0,0);
  pop();}}
*/
