float f,x,y,z,t=999,l=50;
void setup(){size(500,500,P3D);}
void draw(){background(125);f+=l;circle((f/l)%t,l,l);
for(x=0;x<t*3;x+=l){for(y=0;y<t;y+=l){for(z=0;z<t*2;z+=l){push();
 translate(x-t,t-y,z-t*2-250);
 float n=noise(x/t,y/t,(z-f)/t)*t;
 if(n>y){box(l);}pop();}}}}//#p5t
