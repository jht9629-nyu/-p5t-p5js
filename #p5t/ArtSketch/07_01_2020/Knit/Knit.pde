float x,y,xs,ys=10;

void setup(){
  size(500,500,P3D);
  xs=ys+.25;
  noStroke();
}

void draw(){
  pointLight(50,100,125,250,500,0);
  pointLight(125,50,100,250,0,0);
  translate(x,y);
  sphere(28);
  x+=xs;
  y+=ys;
  if(x>500||x<0)
    xs*=-1;
  if(y>500||y<0)
    ys*=-1;
}
