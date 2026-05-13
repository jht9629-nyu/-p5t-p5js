int x,y,t,a,b;
void setup(){size(480,480);fill(0);}
void draw(){
for(x=1; ++x<479;)for(y=1;++y<479;){t=0;
 for(a=x-1;a<x+2;a++)for(b=y-1;b<y+2;)t+=red(get(a,b++))>0?1:0;
 t=t==3?-1:t!=4?0:color(255,red(get(x,y))-9,0);
 set(x,y,color(t));}circle(random(480),random(480),75);}//#p5t
