float f,m,n=99,r=50;
void setup(){size(500,500,P3D);strokeWeight(9);colorMode(HSB,n);noFill();}
void draw(){f+=.15;
for(int x=0;x<10;x++){for(int y=0;y<5;y++){push();m=(y%2==0)?-1:1;
translate(x*r,y*n+r);rotateX(sin((x+f*m)/10*m)*PI);stroke((f+x*2)%n,r,r);
rect(0,0,r,r);pop();}}}
