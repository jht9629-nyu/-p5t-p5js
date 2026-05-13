float i,f,x,y,u=1;
void draw(){frame.setSize(480,480);rectMode(3);clear();f-=u*=f<0?-1:1;
if(f>50){x=random(350);y=random(430);u*=-1;}
for(i=-1;++i<2;){fill(-1);ellipse(x+i*60,y,50,25);fill(#640707);circle(x+i*60,y,25);fill(0);circle(x+i*60,y,9);rect(x+i*60,y-50+f,50,30);}}//#p5t
