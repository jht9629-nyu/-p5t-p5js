float f;int a,h=1,i,n=480;
void draw(){frame.setSize(n,n);strokeWeight(3);colorMode(3,99);f+=.0025;fill(0,9);square(i=0,0,n);for(;i++<34;){a=i+1;h=i%2<1?1:-1;fill((f+i*3+50)%99%99,99,99,i);stroke((f+i*3)%99,99,99);arc(240,240,n-i*15,480-i*15,h*a*f+a*PI/4,h*a*f+PI+a*PI/4);}}//#p5t
