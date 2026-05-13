float x,y,a,w,d;

void setup(){
  size(500,500);noStroke();frameRate(99);}
 
void draw(){
  if(a>w){
    fill(r(255),r(255),r(255),15);x+=w;d=r(75);w=r(99);a=0;
    if(x>500){x=0;y+=r(99);}
    if(y>500){y=0;}
  }rect(x,y+d,a,500-y);a++;}

float r(float n){return random(n/5,n);};
