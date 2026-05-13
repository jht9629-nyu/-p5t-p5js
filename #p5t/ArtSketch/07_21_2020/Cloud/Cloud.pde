float[] x=new float[99];float[] y=new float[99];int f;

void setup(){
  size(500,500);clear();colorMode(HSB,99);noStroke();}

void draw(){f++;
  for(int i=0;i<98;i++,x[i]+=random(-9,9),y[i]+=random(-9,9)){
    fill(i,99,99,5);circle(x[i],y[i],9);
    if(y[i]<0||y[i]>500){x[i]=i/2;y[i]=0;}}}
