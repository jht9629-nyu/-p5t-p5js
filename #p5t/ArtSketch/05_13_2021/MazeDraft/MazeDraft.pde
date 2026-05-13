int n=#000000,m=-1,x,y=m,s=480,o=s/2,p=o,T,a=n;
void setup(){
  size(480, 480);
  clear();
  frameRate(s);
}

void draw() {
  loadPixels();
  T=pixels[(o%s)+p*s];
  if(T==n){
    set(o, p, m);
    if(a==n)
      a=m;
    else
      if (x!=0) {
        y=-x;
        x=0;
      } else {
        x=y;
        y=0;
      }
  } else {
    set(o, p, n);
    if(a==m)
      a=n;
    else
      if (x!=0) {
        y=x;
        x=0;
      } else {
        x=-y;
        y=0;
      }
    }
    
  o+=x+s;
  p+=y+s;
  p%=s;
}
