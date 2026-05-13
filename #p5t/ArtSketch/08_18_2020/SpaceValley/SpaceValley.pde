float f=99,x,z,a,b,t,m=275;void setup(){size(500,500,P3D);stroke(0,f);}void draw(){clear();for(x=0;x<m*3;x+=9){beginShape(18);for(z=-m*9;z<m*2;z+=9){a=noise(x/f,(z-t)/f)*cos(x/50-5)*f;b=noise((x+9)/f,(z-t)/f)*cos((x+9)/50-5)*f;vertex(x,m+a,z);vertex(x+9,m+b,z);}endShape();}t+=9;}

//stroke(255);point(sin(x)*500,x/3);noStroke();
//fill(9);circle(40,f,40);
