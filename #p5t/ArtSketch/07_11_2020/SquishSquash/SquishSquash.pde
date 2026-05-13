float f=10;
int a,b=10;

public void setup(){
  size(500,500,P3D);
  colorMode(HSB,99);
  a=-2000;
}
  
public void draw(){
  f+=.5f;
  a-=b;
  for (int i=98;i>-1;i--){
    fill((f/10f)%99,99,75);
    ellipse(250,250,10*i+a,10*i);
  }
  if(a<-2000||a>2000){
    b*=-1;
  }
}
