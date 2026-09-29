// PlusOne (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/11_19_2020/PlusOne/PlusOne.pde
// #p5t/ArtSketch/11_19_2020/PlusOne/PlusOne.pde

let m, x, y, c, o, p = -1, s;

function setup() {
  pixelDensity(1); // p5t.js pixel access needs one canvas pixel per sketch pixel
  createCanvas(480, 480);
  background(204); // Processing default background
  o = jcolorInt(1); // color(1): gray 1
}

function draw() {
  m = 0;
  for (x = 0; x < 480; x++)
    for (y = 0; y < 480; y++) {
      if (dist(x, y, 420, 420) < 50) jset(x, y, p);
      jset(470, 470, o);
      jset(
        floor(random(4)) - 2 + x,
        floor(random(4)) - 2 + y,
        jget(x, y) == p ? p : o
      );
    }
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/11_19_2020/PlusOne/PlusOne.pde
/*
int m,x,y,c,o=color(1),p=-1,s;

void setup(){
  size(480,480);
}

void draw(){
  m=0;
  for(x=0;x<480;x++)
   for(y=0;y<480;y++){
     if(dist(x,y,420,420)<50)set(x,y,p);
     set(470,470,o);
     set((int)random(4)-2+x,(int)random(4)-2+y,get(x,y)==p?p:o);
   }
}//#p5t
*/
