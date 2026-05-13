float f,c,i;
void setup(){size(480,480,P3D);
frustum(-25,25,-25,25,43,9330);
colorMode(3,99);
noFill();}

void draw(){f-=i=.1;
  clear();
  for(;i++<2000;){
    stroke(sin((i+f*9)/299)*45+50,99,99,39);
    push();
    translate(noise(c)*99,cos(-c)*50,30*(i-999));
    c=(i+f)/9;circle(0,0,800);
    pop();
  }
}//#p5t
