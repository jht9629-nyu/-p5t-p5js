float a,f,inc=PI/99;
void setup(){size(500,500);colorMode(HSB,255);clear();}
void draw(){f+=.005;a=f;
 stroke(f*99%255,155,155);
 for(int i=-100;i<600;i=i+2){
  push();
  translate(i,250+sin((i+f*9)/100f)*99);
  rotate(f);
  line(0,0,0,tan(a)*(f%9));
   a=a+inc;
   pop();}
}//#p5t
