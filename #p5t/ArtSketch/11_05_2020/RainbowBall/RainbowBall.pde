int f,x,y,n=480;
void setup(){size(480,480);colorMode(3,99);}
void draw(){
  fill(x=f%2-1,2);
  rect(-1,-1,490,490);
  f=f>n?f%2-1:f+2;
  for(;x<n;x++)
    for(y=0;y<n;y++){
      float d=dist(x,y,240,240);
      if(d>f&d<f+9)
        set(x,y,color((f+y)/6%59,99,49));
    }
}//#p5t
  
