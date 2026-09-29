// distress (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_24_2020/distress/distress.pde
// #p5t/ArtSketch/09_24_2020/distress/distress.pde

let x = 0,
  y,
  f = 0,
  c;

function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true); // Processing P3D smooths by default
  linePerspective(false); // Processing P3D strokes keep a constant width
}

function draw() {
  background(0); // clear()
  translate(-width / 2, -height / 2); // Processing P3D origin is the top-left corner
  for (; x++ < 51; ) {
    beginShape(QUAD_STRIP);
    for (y = 0; y < 35; ) {
      // Java int colors: -1 is white, -65536 is red.
      fill(
        x < 24 && y > 18
          ? y % 2 > 0 && x % 3 < 1
            ? '#FFFFFF'
            : '#0000FF'
          : y % 2 < 1
          ? '#FF0000'
          : '#FFFFFF'
      );
      vertex(x * 9, y * 9, noise(x / 9 + f, y / 9) * 59 - 59);
      c = x + 1;
      vertex(c * 9, y * 9, noise(c / 9 + f, y++ / 9) * 59 - 59);
    }
    endShape();
  }
  f += x = 0.01;
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/09_24_2020/distress/distress.pde
/*
float x,y,f,c;void setup(){size(500,500,P3D);}void draw(){clear();for(;x++<51;){beginShape(18);for(y=0;y<35;){fill(x<24&y>18?y%2>0&x%3<1?-1:#0000FF:y%2<1?-65536:-1);vertex(x*9,y*9,noise(x/9+f,y/9)*59-59);c=x+1;vertex(c*9,y*9,noise(c/9+f,y++/9)*59-59);}endShape();}f+=x=.01;}//#p5t
*/
