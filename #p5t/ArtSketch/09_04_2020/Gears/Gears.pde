float n=25,b,f,i,c,l=98,m;
void draw(){
frame.setSize(500,500);translate(250,m=205);
for(i=.7;i<8;i+=PI/2){if(i>6){rotate(f++/49);m=0;}fill(i*c,l,i,c);beginShape();for(c=0;c<33;){n*=c++%2<1?1:-1;b=n+l;vertex(sin(i-f/l)*m+sin(c*PI/16)*b,cos(i-f/l)*m+cos(c*PI/16)*b);}endShape();}}
