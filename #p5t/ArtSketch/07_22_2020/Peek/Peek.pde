float[] x=new float[64],y=new float[64];float f;float s;

void setup(){
  size(500,500);
}

void draw(){f+=.3;
  clear();
  for(int i=0;i<64;i++){
    if(f<5){x[i]=i%8*62+32;y[i]=i/8*62;}
    y[i]++;s=sin((y[i]+f)/20);
    circle(x[i]+s*50,y[i],s*9);
    if(y[i]>500)y[i]=0;
  }
}
