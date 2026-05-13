float x = 250;
float m = 250;
float a = 1;

void setup(){
  size(500, 500);
  m = 0;
}

void draw(){
  fill(m, 12);
  rotate(m);
  circle(x+m, x+m, m);
  circle(x-m, x+m, m);
  circle(x-m, x-m, m);
  circle(x+m, x-m, m);
  
  if(m > 1100 || m < -500){
    a*=-1;
  }
  m+=a;
}
