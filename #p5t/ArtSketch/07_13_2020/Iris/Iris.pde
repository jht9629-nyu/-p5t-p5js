float f,x,y;

void setup(){
  size(500,500);
  background(255);
  
  noFill();
  colorMode(HSB,99);
}

void draw(){
  f+=.1;
  
  translate(250,250);
  rotate(f/9f);
  
  x=sin(f)*99+150*cos(f*3);
  y=cos(f)*99+150*sin(f*3);
  stroke(f%99,50,50,9);
  triangle(x,y,-99,0,50,0);
}
