float x,m = 250;
int a =1;

void setup(){
  size(500,500);
  m = 0;
}

void draw(){
  translate(250,250);
  fill(m, 12);
  rotate(m);
  circle(x+m, x+m, m);
  circle(x-m, x+m, m);
  circle(x-m, x-m, m);
  circle(x+m, x-m, m);
  
  if(m > 350 || m < -225){
    a*=-1;
  }
  m+=a;
}
