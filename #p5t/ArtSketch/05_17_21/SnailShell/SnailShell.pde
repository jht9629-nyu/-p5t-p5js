int m=-1,s=480, x, y=m, o=s/2, p=o, n=-s*o,a=m, T;
void setup() {
  size(480, 480);
  background(m);
  frameRate(s);
}
void draw() {
  loadPixels();
  T=pixels[o+p*s];
  
// (a, Turn, T)
//        T:n         T:m
//a:n (a:m,R,T:n) (a:n,L,T:n)
//a:m (a:m,L,T:m) (a:n,R,T:n)
  if (a==T) { //a==T
    T=m;  //println("same");  
    if (x!=0) { //R
      y=x;
      x=0;
    } else {
      x=-y;
      y=0;
    }
    if(a!=m)a=m;else a=n;
  } else {  //println("diff");  
// (a, Turn, T)
//        T:n         T:m
//a:n (a:m,R,T:n) (a:n,L,T:n)
//a:m (a:m,L,T:m) (a:n,R,T:n)
    if(a!=n)a=m;else a=n;
    if(T!=n)T=n;else T=m;
    if(x!=0) { //L
      y=-x;
      x=0;
    } else {
      x=y;
      y=0;
    }
  }
  set(o,p,T);
  o+=x+s;
  o%=s;
  p+=y+s;
  p%=s;
}//#p5t
