int x,y,f,d,c,s=1;
void setup(){size(480,480,P3D);colorMode(3,99);}
void draw(){
 f+=s;if(f<0|f>310)s*=-1;c=f%2;
 for(x=0;x<480;x+=9){
  d=480-f;if(d%2<1)d=f;
  push();
  if(c<1)translate(x,d,f);else translate(d,x,f);
  fill((f+x)%99,99,99,9);
  text("#p5t",0,0);
  pop();}}
