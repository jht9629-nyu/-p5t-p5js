float x,y,q,w,a,f,l=20;
void setup(){size(500,500);colorMode(HSB,99);}
void draw(){f++;if(f%9==0){fill(0,9);rect(-1,-1,550,550);}
  q=sin(a)*l+x;w=cos(a)*l+y;a+=w;line(x,y,q,w);if(a>PI){stroke(random(99),99,99);while(q>500|w>500|q<0|w<0){a+=w;q=sin(a)*l+x;w=cos(a)*l+y;}x=q;y=w;}}
