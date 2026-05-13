int x,y,t,c,s,a,b,i;
void setup(){size(500,500);textSize(24);}
void draw(){
  a=mouseX;b=mouseY;clear();t--;
  if(t<0){s=0;t=9;}
  for(i=0;i<16;i++){
    x=i%4*165;y=i/4*165;if(i==c){fill(t*6,0,0);circle(x,y,100);if(dist(a,b,x,y)<50){s++;t=40;c=(int)random(16);}}}
  text(s,a,b);}
