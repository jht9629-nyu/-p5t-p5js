// CaveAdventure (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/10_16_2020/CaveAdventure/CaveAdventure.pde
// #p5t/ArtSketch/10_16_2020/CaveAdventure/CaveAdventure.pde

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
      jset(x, y, jcolorInt(round(noise((x + f) * 0.01, y / 99)) * 255));
  o += key == 'a' ? -2 : key == 'd' ? 2 : 0;
  p += key == 'w' ? -2 : key == 's' ? 2 : 0;
  if (jred(jget((o = (o + c) % c), (p = (p + c) % c))) > 0) s = 0;
  fill(c, 0, 0);
  text(s, o, p);
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/10_16_2020/CaveAdventure/CaveAdventure.pde
/*
int x,y,s,o,p,f,c=480;
void setup(){size(480,480);}
void draw(){f++;s++;for(x=0;x<c;x++)for(y=0;y<c;y++)set(x,y,color(round(noise((x+f)*.01,y/99f))*255));o+=key=='a'?-2:key=='d'?2:0;p+=key=='w'?-2:key=='s'?2:0;if(red(get(o=(o+c)%c,p=(p+c)%c))>0)s=0;fill(c,0,0);text(s,o,p);}//#p5t
*/
