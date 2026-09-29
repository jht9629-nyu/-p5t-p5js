// Snake (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_15_2020/Snake/Snake.pde
// #p5t/ArtSketch/09_15_2020/Snake/Snake.pde

// Keys: w a s d steer the snake around the 9 x 9 grid.
let x = 0, y = 0, i, b, l = 0;
let g = [];

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
  frameRate(9);
}

function draw() {
  while (g.length < 81) g.push(0); // g = expand(g, 81)
  i = 0;
  x += key == 'a' ? -1 : key == 'd' ? 1 : 0;
  x += 9;
  x %= 9;
  y += key == 'w' ? -1 : key == 's' ? 1 : 0;
  y += 9;
  y %= 9;
  b = x + y * 9;
  if (idiv(l++, 2) + g[b] > 99) l = 0;
  g[b] = 99;
  while (i < 81) {
    g[i]--;
    fill(idiv(l, 2) + g[i] < 99 ? 0 : 255); // fill(0) or fill(-1)
    square(56 * (i % 9), 56 * idiv(i++, 9), 56);
  }
}

// ---- Original Processing source: #p5t/ArtSketch/09_15_2020/Snake/Snake.pde
/*
int x,y,i,b,l;int[] g={};void draw(){frame.setSize(500,500);frameRate(9);g=expand(g,81);i=0;x+=key=='a'?-1:key=='d'?1:0;x+=9;x%=9;y+=key=='w'?-1:key=='s'?1:0;y+=9;y%=9;b=x+y*9;if(l++/2+g[b]>99)l=0;g[b]=99;while(i<81){g[i]--;fill(l/2+g[i]<99?0:-1);square(56*(i%9),56*(i++/9),56);}}
*/
