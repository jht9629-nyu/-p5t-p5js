float f,x,y;
void setup(){
  size(500, 500, P3D);clear();stroke(255,20);colorMode(HSB,99);}
void draw(){f+=.01;f=f%40;
  fill(f*5%99,50,99,2);
  x=sin(f)*f*10;y=cos(f)*f*10;
  line(250,100,250-x,100+y);line(250,400,250+x,400+y);
  bezier(250,100,250-x,100+y,250+x,400+y,250,400);}
