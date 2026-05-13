float f,z,d=.2;void setup(){size(500,500);}
int i,n=480,b=240;
float[] a={0,0,n,0,n,n,0,n,0,b,b,0,n,b,b,n,0,b};
void draw(){fill(i=0,9);square(0,0,n);frame.setSize(n,n);f+=d;d*=f>b/2|f<0?-1:1;stroke(b,0,0,99);while(i<8){z=(i+1)*PI/2+f;line(a[i*2],a[i*2+1],b+sin(i*PI/2+f)*f, b+cos(PI*i++/2+f)*f);}}//#p5t
