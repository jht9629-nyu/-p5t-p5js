// Pinwheels (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_21_2020/Pinwheels/Pinwheels.pde
// #p5t/ArtSketch/08_21_2020/Pinwheels/Pinwheels.pde

let x, y, f = 0, a, u, v, i = 0, b = 0, c = 255;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  f += 0.2;
  fill(0, 2);
  square(-9, -9, 520);
  colorMode(HSB, c);
  stroke(f % c, c, c);
  for (y = 0; y < 520; y += 40) {
    b++;
    stroke((f * 3 + y / 9) % c, c, c);
    for (x = 0; x < 520; x += 40) {
      i++;
      a = (PI / 2) * ((i + b) % 2) + f / 9;
      u = sin(a) * 20;
      v = cos(a) * 20;
      line(x + u, y + v, x - u, y - v);
    }
  }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_21_2020/Pinwheels/Pinwheels.pde
/*
float x,y,f,a,u,v,i,b,c=255;void draw(){f+=.2;fill(0,2);square(-9,-9,520);frame.setSize(500,500);colorMode(HSB,c);stroke(f%c,c,c);for(y=0;y<520;y+=40){b++;stroke((f*3+y/9)%c,c,c);for(x=0;x<520;x+=40){i++;a=PI/2*((i+b)%2)+f/9;u=sin(a)*20;v=cos(a)*20;line(x+u,y+v,x-u,y-v);}}}//#p5t
*/
