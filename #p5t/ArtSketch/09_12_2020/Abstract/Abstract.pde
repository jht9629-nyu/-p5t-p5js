int f,n=500,m=250,x=m,y=m,c=m;
void setup(){size(500,500);noFill();colorMode(HSB,m);clear();frameRate(99);rectMode(3);}
void draw(){
 stroke(f++/10f%m,m,m,59);
 if(c==250){square(x,y,f%m);
 }else{ circle(x,y,f%n);}
 if(f%c==0){c=c==m?n:m;x=(int)random(n);y=(int)random(n);}}//#p54
