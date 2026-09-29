// WASD (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_28_2020/WASD/WASD.pde
// #p5t/ArtSketch/08_28_2020/WASD/WASD.pde

// Keys: w a s d move the score; catch the falling star.
let x = 0, y = 0, u, s, o = 0, p = 0, a = 0, m = 500, t = 0;

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
}

function draw() {
  background(0); // clear()
  s = key == 'a' ? -3 : key == 'd' ? 3 : 0;
  x += s;
  u = key == 'w' ? -3 : key == 's' ? 3 : 0;
  y += u;
  x = x > m ? 0 : x < 0 ? m : x;
  y = y > m ? 0 : y < 0 ? m : y;
  text(t, x, y);
  if (p < 0 || p > m || dist(x, y, o, p) < 9) {
    t = p < 0 || p > m ? 0 : t + 1;
    p = m * (t % 2);
    a = p > 0 ? -2 : 2;
    o = Math.trunc(random(m));
  }
  p += a;
  text('✪', o, p);
}

// ---- Original Processing source: #p5t/ArtSketch/08_28_2020/WASD/WASD.pde
/*
int x,y,u,s,o,p,a,m=500,t;void draw(){frame.setSize(500,500);clear();s=key=='a'?-3:key=='d'?3:0;x+=s;u=key=='w'?-3:key=='s'?3:0;y+=u;x=x>m?0:x<0?m:x;y=y>m?0:y<0?m:y;text(t,x,y);if(p<0|p>m|dist(x,y,o,p)<9){t=p<0|p>m?0:t+1;p=m*(t%2);a=p>0?-2:2;o=(int)random(m);}p+=a;text('✪',o,p);}
*/
