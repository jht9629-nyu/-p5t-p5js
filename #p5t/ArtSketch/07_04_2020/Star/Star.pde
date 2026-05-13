float x,c,z=0.1;

void setup(){
 size(500,500);}

void draw(){
  fill(c,0,255-c,2);
  square(-1,-1,510);
  fill(255-c,0,c);
  x+=.01;c+=z;
  translate(250,250);
  rotate(x);
  translate(100,100);
  rotate(x*100);
  translate(-50,-50);
  rect(0,0,10,10);
  if(c>=255||c<0){z*=-1;}}
