float w,x,y,a,b;int c,o=250;
void setup(){
  size(500,500);frameRate(o*5);noStroke();clear();c=o;}
void draw(){
  w+=.5;x+=.1;y+=.1;
  a=sin(x)*w+o;b=cos(y)*w+o;
  fill(0,9);circle(a,b,30);
  fill(c);circle(a,b,2);
  if(w>350){c=color(random(o),random(o),random(99,o));x++;w=0;}}
