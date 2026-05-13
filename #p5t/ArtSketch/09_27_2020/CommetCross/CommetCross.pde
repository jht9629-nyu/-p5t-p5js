class P{
  float x=240,y=240,s=0,u=0;//cos(i/9);
  
  void d(){
    for (i=0;i<9;) {
      circle(x,y,i++*2);
      //x=+s;y+=u;
    }
  }
}
int i,j;
P[] p=new P[99];
void setup() {
  size(480, 480);
  noStroke();
  while(i<99) {
    p[i++]=new P();
  }
}
void draw() {
  fill(j=0, 3);
  square(0, 0, 480);
  fill(255, 9);
  for(P o:p)o.d();
}//#p5t
