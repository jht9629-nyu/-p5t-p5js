float x,y,b=.098;

void setup(){
  size(500,500);
  background(255);
  
  noFill();
  colorMode(HSB,99);
  noStroke();
  frameRate(200);
}

void draw(){
  y-=b;
  text('+',x+sin(y)*100,y);
  if(y<0){
    x=random(50,450);
    y=510;
    fill(frameCount%99,50,50);
  }
}
