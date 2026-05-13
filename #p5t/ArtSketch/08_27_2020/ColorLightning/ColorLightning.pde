int x,y,f,c=250,a,b,n,i,p=99,m=500;
void setup(){size(500,500);clear();colorMode(HSB,c);frameRate(999);}
void draw(){f++;a=a>m?0:a<0?m:a;b=b>m?0:b<0?m:b;set(b,a,color(f/p%c,c,c));n=n==5?int(random(9)):++n%9;i=8;for(x=a-1;x<a+2;x++)for(y=b-1;y<b+2;y++,i--)if(i==n){a=x;b=y;}}//#p5t
