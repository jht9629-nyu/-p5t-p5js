// https://editor.p5js.org/jht9629-nyu/sketches/F-7kg5JAQ
// matt-parker-08_30-BezSwirl
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_30_2020/BezSwirl/BezSwirl.pde
// #p5t/ArtSketch/08_30_2020/BezSwirl/BezSwirl.pde

let x, y, i, c = 250, o, p, f = 0;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, c);
  o = (++f % 500) - c;
  p = -o;
  fill(0, 4);
  square(0, 0, 500);
  translate(c, c);
  rotate(f / 99);
  stroke(f % c, c, c);
  for (i = 0; i < 16; i += 0.0625) {
    x = bezierPoint(-c, o, p, c, i);
    y = bezierPoint(p, -c, c, o, i);
    line(x, y, x, y + 9);
    line(-x, y, -x, y + 9);
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_30_2020/BezSwirl/BezSwirl.pde
/*
float x,y,i,c=250,o,p,f;void draw(){frame.setSize(500,500);colorMode(HSB,c);o=++f%500-c;p=-o;fill(0,4);square(0,0,500);translate(c,c);rotate(f/99);stroke(f%c,c,c);for(i=0;i<16;i+=.0625){x=bezierPoint(-c,o,p,c,i);y=bezierPoint(p,-c,c,o,i);line(x,y,x,y+9);line(-x,y,-x,y+9);}}//#p5t
*/
