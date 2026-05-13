float c=250,x=c,y=c,a=1,b=-1;

void setup(){
  size(500,500);
  colorMode(HSB,99);
}

void draw(){
  fill(0,0,99,1);
  translate(c,c);
  rotate(x/10);
  stroke(abs(x/5),50,50);
  quad(0,-y,x,0,0,y,-x,0);
  x+=a;
  y+=b;
  if(x==-c||y==-c){
    a=b;
    b*=-1;
  }
}
