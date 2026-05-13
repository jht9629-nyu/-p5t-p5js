int s=480, n=-s*s, m=-1, x, y=m, o=s/2, p=o, a=n, T;
void setup() {
  size(480, 480);frameRate(s);
}
void draw() {
  loadPixels();
  T=pixels[o+p*s];
  if (T<m) {
    set(o, p, m);
    if (a==n)a=m;
    else if (x!=0) {
      y=-x;
      x=0;
    } else {
      x=y;
      y=0;
    }
  } else {
    set(o, p, n);
    if (a==m)a=n;
    else if (x!=0) {
      y=x;
      x=0;
    } else {
      x=-y;
      y=0;
    }
  }
  o+=x+s;
  o%=s;
  p+=y+s;
  p%=s;
}//#p5t
