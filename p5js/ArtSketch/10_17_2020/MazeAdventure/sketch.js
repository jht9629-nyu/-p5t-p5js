// MazeAdventure (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_17_2020/MazeAdventure/MazeAdventure.pde
// #p5t/ArtSketch/10_17_2020/MazeAdventure/MazeAdventure.pde

// Keys: w a s d move the counter; it resets when it touches a wall.
let x, y, s = 0, o = 0, p = 0, f = 0, c = 480;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
}

function draw() {
  f++;
  s++;
  for (x = 0; x < c; x++)
    for (y = 0; y < c; y++)
      // (x+f)/96 and y/96 are int divisions, which makes the blocky maze.
      jset(x, y, jcolor(round(noise(idiv(x + f, 96), idiv(y, 96))) * 255, 0, 0));
  o += key == 'a' ? -2 : key == 'd' ? 2 : 0;
  p += key == 'w' ? -2 : key == 's' ? 2 : 0;
  if (jred(jget((o = (o + c) % c), (p = (p + c) % c))) > 0) s = 0;
  fill(255); // fill(-1)
  text(s, o, p + 4);
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_17_2020/MazeAdventure/MazeAdventure.pde
/*
int x,y,s,o,p,f,c=480;void setup(){size(480,480);}
void draw(){f++;s++;for(x=0;x<c;x++)for(y=0;y<c;y++)set(x,y,color(round(noise((x+f)/96,y/96))*255,0,0));o+=key=='a'?-2:key=='d'?2:0;p+=key=='w'?-2:key=='s'?2:0;if(red(get(o=(o+c)%c,p=(p+c)%c))>0)s=0;fill(-1);text(s,o,p+4);}//#p5t
*/
