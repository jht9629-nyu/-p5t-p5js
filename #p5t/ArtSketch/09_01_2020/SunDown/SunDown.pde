int x,y,c,n=500,l=255;float a,b,d,f;
void setup(){size(500,500);colorMode(HSB,l);}void draw(){f-=.75;for(x=0;x<n;x++)for(y=0;y<n;y++){d=dist(x,y,a,b);c=d<f?color(f%l,l,l):color(d%l,l,brightness(get(x,y))-noise(x/9f,y/9f)*5-random(5));set(x,y,c);}if(f<-50){f=l*1.5;a=l;b=l;}}//#p5t
