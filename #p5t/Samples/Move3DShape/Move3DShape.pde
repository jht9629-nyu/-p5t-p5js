float f;
void setup() {
  size(480, 480, P3D);
  fill(255,1);
}
void draw() {
  f+=(f>999)?-999:9;
  if(f<0)clear();
  lights();
  translate(240, 240);
  rotate(f);
  box(f);
}
