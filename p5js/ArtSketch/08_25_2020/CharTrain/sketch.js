// CharTrain (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_25_2020/CharTrain/CharTrain.pde
// #p5t/ArtSketch/08_25_2020/CharTrain/CharTrain.pde

let f = 0,
  x,
  y,
  c = 50,
  b = 530,
  a = 20,
  p,
  o;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  // textFont(createFont("", a)): Processing's default sans-serif at size a
  textFont('sans-serif');
  textSize(a);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  o = ++f % b;
  background(0); // clear()
  text('✈\n\n◙◡◙◡◙', o, c);
  text('☀☁', c, a);
  for (y = c * 2; y < b; y += a)
    for (x = 0; x < b; x += a) {
      text('⌗', x, 135);
      p = c * cos((y + f) / a);
      if (y % c < 1 && p < 0) text('⇰', (o + y) % b, y + p);
      text('~', x, y + cos(f / c) * a);
    }
}

// ---- Original Processing source: #p5t/ArtSketch/08_25_2020/CharTrain/CharTrain.pde
/*
float f,x,y,c=50,b=530,a=20,p,o;void draw(){frame.setSize(500,500);textFont(createFont("",a));o=++f%b;clear();text("✈\n\n◙◡◙◡◙",o,c);text("☀☁",c,a);for(y=c*2;y<b;y+=a)for(x=0;x<b;x+=a){text("⌗",x,135);p=c*cos((y+f)/a);if(y%c<1&p<0)text('⇰',(o+y)%b,y+p);text('~',x,y+cos(f/c)*a);}}
*/
