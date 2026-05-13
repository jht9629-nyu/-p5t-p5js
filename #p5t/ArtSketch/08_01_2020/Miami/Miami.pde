float f,h,c=250,d=500,a=100,t=200;
void setup(){size(500,500,P3D);background(t,c,c);}
void draw(){fill(c,c,t);circle(a,a,50);fill(c,t,t);f+=3;f%=d*9;for(int i=0;i<a;i++){
for(int j=0;j<5;j++){push();h=noise(i+j)*a*3;translate(j*400-d,d-h/2,-i*c+f);box(i%2*a+a,h,j%2*a+a);pop();}}}
        
//float f,h,c=250,d=500,a=100,t=200;
//void setup(){size(500,500,P3D);background(t,c,c);}
//void draw(){f+=3;f%=d*9;fill(c,c,0);circle(a,a,50);fill(c,t,t);
//  for(int i=0;i<a;i++){push();translate(-a,a,-i*c+f);
//      for(int j=0;j<5;j++){push();h=noise(i+j)*400;
//        translate(j*400-d,d-h/2,0);box(h);pop();}pop();}}
        
        
//float f,h,c=250,d=500,a=100,t=200,i,j;void setup(){size(500,500,P3D);background(t,c,c);}
//void draw(){f+=3;f%=d*9;
//  fill(c,t,t);circle(a,a,50);
//  for(i=0;i<a;i++){push();translate(-a,a,-i*c+f);
//      for(j=0;j<5;j++){push();h=noise(i+j)*400;
//        translate(j*400-d,d-h/2);box(h);pop();}pop();}}
