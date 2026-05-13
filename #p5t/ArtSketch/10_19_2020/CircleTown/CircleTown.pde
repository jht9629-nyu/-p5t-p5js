int x,y,c=480;
float f;
void setup(){
  size(480,480);
  colorMode(HSB,c);
clear();noStroke();frameRate(c);
}
void draw(){
  f++;
  for(x=0;x<c;x++)
    for(y=0;y<c;y++)
      set(x,y,color(get(x+1,y)));
    
  fill(f%c,c,c);
  circle(sin(f)*200+275,cos(f)*200+240,9);
}//#p5t
