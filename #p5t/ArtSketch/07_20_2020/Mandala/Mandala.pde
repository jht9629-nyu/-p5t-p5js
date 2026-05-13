float[] x=new float[999];
float[] y=new float[999];
int f;

void setup(){
  size(500,500);clear();colorMode(RGB,99);noStroke();
}

void draw(){
  f++;
  for(int i=0;i<999;i++){
    fill(x[i]/5,i%99,99-i%99,5);
    circle(x[i],y[i],9);
    x[i]+=random(-9,9);
    y[i]+=random(-9,9);
    if(x[i]<0||x[i]>500||y[i]<0||y[i]>500){
      x[i]=i/2;y[i]=f%500;
    }
  }
}
