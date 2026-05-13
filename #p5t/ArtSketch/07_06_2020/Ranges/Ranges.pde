float x,y;

void setup(){
  size(500,500);
  background(75,75,150);
}

void draw(){
  x++;
  y=noise(-frameCount/500f,-frameCount/500f)* 500;
  for(float i=y;i<500;i++){
    circle(x, i, 10);
  }
  
  if(x>500){
    x=0;
    stroke(random(255),random(255),250);
  }
}
