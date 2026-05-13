float x,y,a=.5;
int[] p;

public void setup(){
  size (500,500,P3D);
  colorMode(HSB,99);
  frameRate(5);
  rectMode(CENTER);
}
  
public void draw(){
  translate (250,250);
  rotate(frameCount*20);
  fill (frameCount%99,99,50,10);
  stroke (50-frameCount%99,99,99,10);
  box(1000,50,30);
}
