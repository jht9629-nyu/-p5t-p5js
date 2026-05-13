float f,s=.1,n=99;

void setup(){
 size(500,500,P3D);
 ortho();
 colorMode(3,n);
 clear();
}

void draw(){
 fill((f+50)%n,n,n,1);
 stroke(f%n,n,n);
 f+=s;
 if(f<0|f>275)
  s*=-1;
 translate(250,250,0);
 rotateX((-PI+f)/9);
 rotateY((PI+f)/6);
 rotateZ((PI+f)/3);
 box(f);
}//#p5t
