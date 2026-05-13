int x,y,m,a=-1,b=color(0),c,i;
void setup(){size(480,480);}
void draw(){
if(m<1){
 c=a;a=b;b=c;
 set(1,1,a);set(478,479,a);}
for(m=x=0;x<480;x++)for(y=0;y<480;y++)
 if(get(x,y)==a)
  for(i=0;i<2-x%2;i++)
    set(x+(int)random(-2,2)*2,y+(int)random(-2,2),a);
 else m++; 
}//#p5t
