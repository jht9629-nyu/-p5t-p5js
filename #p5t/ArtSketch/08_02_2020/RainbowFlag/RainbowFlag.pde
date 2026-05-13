//#p5t
float x,i,j,f,a,b=PI/50,l=50;
void setup(){size(500,500);colorMode(HSB,99);clear();}
void draw(){f+=.025;a=0;
  for(i=0;i<11;i++){for(j=0;j<99;j++){x=i*l;a=a+b;
    stroke(j,99,80);line(x,j*6-l,x+sin(a+f)*40,j*5-l);
    stroke(0);line(x+1,j*6-l,x+1+sin(a+f)*40+1,j*5-l);}}}
