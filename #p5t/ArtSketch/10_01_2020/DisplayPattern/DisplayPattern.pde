float[] y=new float[72];float f,s;int i,n=480;
void setup(){size(480,480);}
void draw(){
 frame.setSize(n,n);
 f+=.02;
 fill(0,3);
 square(0,0,n);
 noStroke();
 fill(255);
 for(i=0;i<72;){
  y[i]=f<1?i/9*62:y[i]<0?n:y[i]>n?0:i%2<1?y[i]+.5:y[i]-.5;
  s=sin(f);
  circle(i%9*62+s*50,y[i++],s*29);
 }
}//#p5t
