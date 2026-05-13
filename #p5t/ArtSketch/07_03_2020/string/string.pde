int a,x,c=250;

void setup(){
  size(500,500);
  a--;
}

void draw(){
  clear();x+=a;
  stroke (0,x,c-x);
  
  for(int i=0;i<500;i+=10){
    line(c-x,i,i,c+x);
    line(i,c-x, c+x,i);
    line(i,c+x,c+x,500-i);
    line(i,c-x,c-x,500-i);
  }
    
  if(x>c||x<0){
    a*=-1;
  }
}
