float f,z;int i,n=480,b=240;float[] a={0,0,n,0,n,n,0,n,0,0};
void draw(){
 frame.setSize(n,n);
 f+=.1;f%=b;
 fill(b);stroke(i=0);
 while(i<4){z=(i+1)*PI/2+f;
  quad(a[i*2],a[i*2+1],a[i*2+2],a[i*2+3],
     b+sin(i*PI/2+f)*f,b+cos(PI*i++/2+f)*f,
     b+sin(z)*f,b+cos(z)*f);}}//#p5t
