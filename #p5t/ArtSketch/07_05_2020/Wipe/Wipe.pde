float y;

void setup(){
  size(500,500);
  noStroke();
  frameRate(30);
}

void draw(){
  fill(0,5);
  rect(-5,-5,510,510);
  for(int x=0;x<500;x+=10){
    fill(random(y),random(255),random(x));
    circle(x+(y%2)*5,y,10);
  }
  y+=5;
  if(y>500){
    y=0;
  }
}
