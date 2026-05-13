float i,j,f=2,n,d=.03;
void setup(){size(480,480);}
void draw(){
frame.setSize(480,480);
f+=d;
for(j=99;j>0;j--){
 fill(j*5);
 stroke(j*3,0,i=0);
 beginShape();
 for(;i<TAU;i+=.06){
  n=noise(i+j,f)/3;
  vertex(240+(sin(i)+n)*20*j*f,240+(cos(i)+n)*20*j*f);
 }
 endShape(2);}
if(f>3|f<.5)d*=-1;
}//#pt5
