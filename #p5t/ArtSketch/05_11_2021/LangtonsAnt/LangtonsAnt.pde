// int x=1,y,s=480,a=s/2,b=a,c;void setup(){size(480,480);clear();frameRate(s);}void draw(){loadPixels();set(a, b,c=red(pixels[a+b*s])>0?#000000:-1);if(c<-1)if(x!=0){y=-x;x=0;}else{x=y;y=0;}else if(x!=0){y=x;x=0;}else{x=-y;y=0;}a+=x+s;a%=s;b+=y+s;b%=s;}//http://bit.ly/3fa1Pam #p5t
int x=1, y, s=480, a=s/2, b=a, c;
void setup() {
  pixelDensity(1);
  size(480, 480);
  clear();
  frameRate(s);
}
void draw() {
  loadPixels();
  set(a, b, c=red(pixels[a+b*s])>0?#000000:-1);
  if (c<-1)if (x!=0) {
    y=-x;
    x=0;
  } else {
    x=y;
    y=0;
  } else if (x!=0) {
    y=x;
    x=0;
  } else {
    x=-y;
    y=0;
  }
  a+=x+s;
  a%=s;
  b+=y+s;
  b%=s;
}//http://bit.ly/3fa1Pam #p5t
