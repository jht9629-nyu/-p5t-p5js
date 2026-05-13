int f,y=500;

void setup(){
  size(500, 500);
  noFill();
}

void draw(){
  for(int o=0; o<500; o+=100){
   for(int x=0; x<500; x+=10){
      rect(x, y+noise(x)*10+o, 10, 10);
    }
  }
  
  y--;
  
  if(y<-20){
    y+=100;
    stroke(random(255), random(255), random(255));
  }
}
