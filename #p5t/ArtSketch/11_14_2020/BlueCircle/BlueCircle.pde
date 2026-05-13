int x,y,t,a,b;
void setup(){size(480,480);}
void draw(){loadPixels();
 for(x=0;++x<479;)for(y=0;++y<479;){
  t=0;
  for(a=x-1;a<x+2;a++)for(b=y-1; b<y+2;)t+=red(pixels[a+b++*480])>0?1:0;
  t=t==3?-1:t!=4?0:color(red(get(x,y))-99,255,255);
  set(x,y,color(t));}}//#p5t
