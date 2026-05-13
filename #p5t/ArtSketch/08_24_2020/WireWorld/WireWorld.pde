float f=99,x,z,a,b,t,m=240,c=30;
void setup(){size(500,500,P3D);stroke(-1);fill(0);}
void draw(){clear();for(z=-m*9;z<m*9;z+=c){circle(z,f+sin(z/2)*f+(t/f)%f,2);beginShape(TRIANGLE_STRIP);for(x=-m*6;x<m*9;x+=c){a=noise((z-t)/m,x/f)*m;vertex(x, m+a, z);}endShape();}t+=c/2;}//#p5t
//float f=99,x,z,a,b,t,m=240,c=30;
//void setup(){
//  size(500, 500, P3D);stroke(-1);fill(0);
//}
//void draw(){
//  clear();
//  //directionalLight(0,m,m,1,1,0);
//  for(z=-m*9;z<m*2;z+=c){circle(z,f+sin(z/2)*f,1);
//    beginShape(TRIANGLE_STRIP);
//    for(x=-m*6;x<m*6;x+=c){
//      //if(a>100)fill(0,0,155);else fill(155,0,0);
//      //a=noise((x-sin(t/m)*c)/m,(z-t)/f)*m;
//      a=noise(x/m,(z-t)/f)*m;
//      vertex(x, m+a, z);
//    }
//    endShape(CLOSE);
//  }
//  t+=c/2;
//}
