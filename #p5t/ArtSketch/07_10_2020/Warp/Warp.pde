float x,y,a=.5;
public void setup(){
  size (500,500);
 frameRate(999);
}
  
public void draw(){
  x+=a;
  background (255,255,255);
  y=250+sin(x/30f)*250;
  for (int i=0;i<25;i++){
    for(int j=0;j<25;j++){
    line(i*20,j*20,x,y);
    }
  }
  if(x>500||x<0){
    a*=-1;
  }
}
