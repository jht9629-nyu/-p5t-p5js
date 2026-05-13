float x,y,f,d,s,m=.1,i=m;
void setup(){size(500,500,P3D);
  sphereDetail(1);fill(125,0,0);}
void draw(){f+=m;d+=i;stroke(255-f/s*255,0,0);
  translate(x,y);rotate(d/10);sphere(s-f);
  if(s/2<f&i>0)i*=-1;
  if(s-f<0){f=0;i=m;s=random(70,100);x=random(500);y=random(500);}}
//#p5t
