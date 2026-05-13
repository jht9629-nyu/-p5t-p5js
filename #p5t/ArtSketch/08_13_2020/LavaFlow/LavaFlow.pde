int x,y,i,w=500,c;float d=16,f,n,l=99,p=40;void setup(){size(500,500);colorMode(HSB,l);}
void draw(){f++;for(i=0;i<w*w;i++){x=i%w;y=i/w;n=noise(x/d,(y-f)/d,f/d)*p;c=x<sin((y-f)/p)*d+n+p|x>cos(y/p)*p+w-n|dist(l,l,x,y)<d+n?color(noise(x,y/d)*p,d):color(n/2,l,l,p);set(x,y,c);}}//p5t
