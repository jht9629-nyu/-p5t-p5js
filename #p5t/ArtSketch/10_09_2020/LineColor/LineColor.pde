int n=480;
float a,f=9,d=.1,x,y;
void draw(){
 f+=d;a+=.1;strokeWeight(4);
 colorMode(3,99); 
 if(f>99|f<9)d*=-1;
 frame.setSize(n,n);
 fill(0,9);rect(-5,-5,490,490);
 for(x=0;x<=n;x+=16)
 for(y=0;y<=n;y+=16){
  stroke(50,99,99,18);
  line(x,y,240+sin(a)*f,240+cos(a)*f);}}//#p5t
