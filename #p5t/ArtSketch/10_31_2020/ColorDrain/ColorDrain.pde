float f,x,y,n=480,i,s,r;
void draw(){frame.setSize(480,480);colorMode(3,99);f+=i=10;
 for(;i<6000;i+=10){r=(i+f)/-50;stroke((i+f)/99%99,99,99*i/n);fill(((i+f)/99+50)%99,99,99,20*i/n);circle(240+sin(r)*i/9,240+cos(r)*i/9,9);circle(240+sin(r+PI)*i/9,240+cos(r+PI)*i/9,9);}}//#p5t
