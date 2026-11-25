// https://editor.p5js.org/jht9629-nyu/sketches/C11ce8WLk
// matt-parker-08_23-MazeGrowth
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_23_2020/MazeGrowth/MazeGrowth.pde
// #p5t/ArtSketch/08_23_2020/MazeGrowth/MazeGrowth.pde

let x, y, t, a, b, o, p = -1, m = 71501, s;

function setup() {
  jcreateCanvas(500, 500);
  background(204); // Processing default background
  o = jcolorInt(1); // color(1): gray 1
}

function draw() {
  if (m > 71500) {
    s = o;
    o = p;
    p = s;
    circle(250, 250, 500);
  }
  m = x = 0;
  for (; x < 500; x++) {
    for (y = 0; y < 500; y++) {
      t = 0;
      for (a = x - 1; a < x + 2; a++) {
        for (b = y - 1; b < y + 2; b++) t += jget(a, b) == o ? 0 : 1;
      }
      t = t == 3 ? p : t != 4 ? o : 0;
      if (t < 0) jset(x, y, t);
      else m++;
    }
  }
  jsync();
}

// ---- Original Processing source: #p5t/ArtSketch/08_23_2020/MazeGrowth/MazeGrowth.pde
/*
int x, y,t,a,b,o=color(1),p=-1,m=71501,s;void setup(){size(500,500);}void draw(){if(m>71500){s=o;o=p;p=s;circle(250,250,500);}m=x=0;for(;x<500;x++)for(y=0;y<500;y++){t=0;for(a=x-1;a<x+2;a++)for(b=y-1;b<y+2;b++)t+=get(a,b)==o?0:1;t=t==3?p:t!=4?o:0;if(t<0)set(x,y,t);else m++;}}
*/
