float f,x,y,q,w,a,d=.1;

void setup(){size(500,500,P3D);clear();colorMode(HSB,9);}

void draw(){f++;if (f%10==0){fill(0,.5);rect(-1,-1,509,509);}q=sin(a)*99+x;w=cos(a)*99+y;line(x,y,q,w);a+=d;if(a>=PI||a<-PI){stroke(random(9),9,9);x=q;y=w;a=0;d*=-1;if(y<0){x=random(500);y=500;}}}
