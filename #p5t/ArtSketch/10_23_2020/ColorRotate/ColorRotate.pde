int f,a=-1,b=0,t,d=1;
void setup(){size(480,480,P3D);colorMode(HSB,99);strokeWeight(9);sphereDetail(2);}
void draw(){
  translate(240,240,f++);rotateY(f/18f*d);rotateX(f/18f*d);
  sphere(99);
  stroke(abs(f)%99,50,99,20);fill(a,9);
  if(f==310){f=-300;t=a;a=b;b=t;d*=-1;}
}//#p5t
