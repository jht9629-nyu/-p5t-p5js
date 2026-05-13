float f,c;
int a,h=1;

void setup(){
  size(500,500,P3D);
  strokeWeight(10);
  stroke(255,10);
}

void draw(){f+=.005;
  fill(0,20);
  rect(-20,-20,540,540);
  fill(255,255,0,2);
  for(int i=0;i<17;i++){a=i+1;
    h=(i%2==0)?1:-1;
    fill(125+i*h*10,i);
    arc(250, 250, 490-i*30, 490-i*30, h*a*f+a*PI/4, h*a*f+PI+a*PI/4);
  }
}
