float i,f,m=.015,z,y,n=99,p=255;
void setup(){size(500,500,P3D);noStroke();sphereDetail(3);}
void draw(){f+=(f<n)?m:-n;pointLight(p,n,0,p,p,0);for(y=0;y<10;y+=.2){for(z=0;z<n;z++){push();translate(n+sin(y)*350*(1+(sin(z))*.2)+p,cos(y)*400+noise(y,z)*n,z*n-f*n);sphere(n);pop();}}}
