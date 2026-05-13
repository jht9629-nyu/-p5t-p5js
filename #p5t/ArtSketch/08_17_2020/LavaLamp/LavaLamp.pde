float[] s=new float[500*500];
int f,x,y,i,c=250,h=500,v=h*2,o=150;
void draw(){
frame.setSize(h,h);colorMode(HSB,v);
for(x=0;x<h;x++){for(y=0;y<h;y++){i=x+y*h;if(f<1)s[i]=sin((x+y)/(o+sin(f)*o))*cos((x-y)/(o+sin(f)*o))*v;else set(x,y,color(v*(s[i]%v)/v,v,v));s[i]++;}}
f++;}//#p5t
