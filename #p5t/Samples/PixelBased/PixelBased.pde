int x, y, t;
void setup() {
  size(500, 500);
  colorMode(3,99);
}
void draw() {
  t++;
  loadPixels();
  for (x=1; x<499; x++)
    for (y=1; y<499; y++)
      if(t%499==y)
        set(x, y, color(random(99),99,99));
      else
        set(x, y, (get(x,y)+9));
}
