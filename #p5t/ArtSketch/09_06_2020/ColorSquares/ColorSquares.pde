float f=99,x,y,a=1,t;

void draw(){
  frame.setSize(500,500);
  colorMode(HSB,f);
  background(t,f,f);
  t+=a;
  a*=t>f|t<0?-1:1;
  for(x=0;x<500;x+=50)
    for(y=0;y<500;y+=50){
      fill(abs(t-f+y/30)%f,f,f);
      quad(x,y+t,x+50,y+t,
           x+50,y+50-t,x,y+50-t);}}//#p5t
