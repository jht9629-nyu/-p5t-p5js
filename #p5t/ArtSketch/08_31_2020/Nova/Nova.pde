int x,y,f,c,n=500;float a,b,d;
void setup(){size(500,500);}
void draw(){f++;
for(x=0;x<n;x++)
for(y=0;y<n;y++){d=dist(x,y,a,b);c=-1;
if(d<f|d>f+1)c=color(red(get(x,y))-noise(x/9f,y/9f)*5-random(5));set(x,y,c);}
if(f>n){f=0;a=random(99,400);b=random(99,400);circle(a,b,50);}}//#p5t
