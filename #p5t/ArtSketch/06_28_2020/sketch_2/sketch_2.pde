//Final 6.28.20

float x,m = 250;
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
  
  if(m > 800 || m < -500){
    a*=-1;
  }
  m+=a;
}
