float c,b,f,m,w=1,l=99,n=50;
void draw() {frame.setSize(500,500);colorMode(HSB,l);stroke(f%l,n,n);fill(0,5);
f++;n+=w;if(n>400|n<-200)w*=-1;
translate(250,250);rotate(f/l);
beginShape();for(c=0;c<33;){n*=c++%2<1?1:-1;b=n+l;vertex(sin(c*PI/16)*b,cos(c*PI/16)*b);}endShape();}//#p5t
