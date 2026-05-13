int x,y,c,f,n=500,a=-1,b=color(0);
void setup(){size(500,500);colorMode(HSB,n);}
void draw(){
 for(x=0;x<n;x++)
  for(y=0;y<n;y++){
   c=red(color(noise((x+0)/99f,y/99f)*n))>f?a:b;
   set(x,y,c);}
 f+=4;
 if(f>n*.9){
  f=0;
  noiseSeed(a);
  a=b;
  b=color(random(n),n,n);}}//#p5t
