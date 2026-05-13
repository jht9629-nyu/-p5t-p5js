int x,y,f,c=250;
void setup(){size(500,500,P3D);noStroke();colorMode(HSB,99);clear();}
void draw(){f++;directionalLight(f%99,99,99,1,1,-1);
for(x=25;x<500;x+=50){
push();
translate(x,c);
for(y=-c;y<c;y+=50){
push();
rotate(f/40f);
translate(0,y);
sphere(9);
pop();}pop();}}//#p5t
