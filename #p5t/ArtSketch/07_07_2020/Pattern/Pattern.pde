public void setup(){
  size(500,500);strokeWeight(10);frameRate(8);
}

public void draw(){
  for (int i=0;i<25000;i+=50){
    int y,x=i%500;y=(i/500)*50;
    stroke(random(127),random(127),255);fill(random(127),random(127),255,150);
    rect(x,y,45,45);circle(x+20,y+20,10);
  }
}
