float f,c;

void setup(){size(500,500,P3D);stroke(255,99);frustum(-25,25,-25,25,43,9330);noFill();}

void draw(){f-=.5;
  clear();
  for(int i=0;i<2000;i++){
    pushMatrix();
    translate(noise(c)*99,cos(-c)*50,30*(i-1000));
    c=(i+f)/9;circle(0,0,800);
    popMatrix();
  }
}
