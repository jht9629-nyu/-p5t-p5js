int n=480,f;
float x,y,a;
void draw(){f++;frame.setSize(n,n);colorMode(3,99);
  fill(0,1);rect(0,0,480,480);
  for(x=9;x<n;x+=10)for(y=9;y<n;y+=20){
   a=noise(x/99f,(y+f)/99f);
   push();
   translate(x,y);rotate(a*TAU);
   stroke(a*99,99,99);
   line(0,0,9,9);
   pop();}}//#p5t
   
   void setup(){size(480,480);}
