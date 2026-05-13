int x,y,m,j,a;
void setup(){size(480,480);colorMode(3,99);}
void draw(){
if(m<960){a=color(random(99),99,99);set(239,1,a);set(240,478,a);}
for(m=x=0;x++<480;)for(y=0;y++<480;)if(get(x,y)==a)for(j=0;j++<(1-x%2)+1;)set(x+(int)random(-2,2)*2,y+(int)random(-2,2),a);else m++;}//#p5t
