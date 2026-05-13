int x,y,c,n=480;float f,z,b;
void setup(){size(480,480);}
void draw(){
 for(x=0;x<n;x++)for(y=0;y<n;){z=noise(x/99f,y/99f,f/199f);
  c=z<.5?#008BE5:z<.53?#DEE300:z<.7?#10AF05:z<.8?#AF8B05:-1;
  for(b=0;b<1;b+=.1)c=z>b&z<b+.005?lerpColor(c,0,.3):c;
  set(x,y++,c);}f++;}//#p5t
