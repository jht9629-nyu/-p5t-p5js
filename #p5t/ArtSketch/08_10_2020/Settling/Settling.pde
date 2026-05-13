float f;
void setup(){
  size(500,500);
  colorMode(HSB,9);noStroke();clear();
}
void draw(){f++;
  fill(f/20%9,9,9);
  translate(250,250);
  rotate(f/99);
  b(0,0,100);
}
void b(float x,float y,float f){
  if(abs(f)>1){
  rect(x,y,f,f);rect(x,y,-f,-f);
  b(x+f,y-f,f/2);}}
//#p5t
