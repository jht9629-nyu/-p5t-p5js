float x,y,f,a=.2;void setup(){size(500,500);noFill();clear();colorMode(HSB,99);}
void draw(){f+=a;x=250+sin(f/9)*f;y=250+cos(f/9)*f;stroke(f%99,99,50,5);triangle(0,0,x,y,0,500);triangle(0,500,x,y,500,500);triangle(0,0,x,y,500,0);triangle(500,0,x,y,500,500);if(f>300||f<0){a*=-1;}}
