float[] s=new float[10000];
int f,x,y,i,c=250,h=100;

void draw(){
 frame.setSize(500,500);colorMode(HSB,c);noStroke();
 for(x=0;x<h;x++){
  for(y=0;y<h;y++){i=x+y*h;
   if(f<1){s[i]=sin(x+y)*cos(x-y)*h;}else{fill(c*(s[i]%h)/h,c,c);s[i]++;square(x*5,y*5,9);}
  }
 }
 f++;
}//#p5t
