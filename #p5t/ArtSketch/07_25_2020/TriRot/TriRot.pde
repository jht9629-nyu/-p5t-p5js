float f,a=2;

void setup(){
  size(500,500,P3D);
  clear();
  colorMode(HSB,99);
  fill(f,0,0,5);
}

void draw(){
  f-=a;
  stroke(f*-.1%99,99,50);

  translate(250,250,f);
  rotate(f/100);
  triangle(-500,500,0,-500,500,500);

  if(f<-3800||f>0){
    a*=-1;
  }
}
