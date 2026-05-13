float i,x,y,m,f,s,w,d=1;
void setup(){size(500,500);noStroke();}
void draw(){f+=d;s=sin(PI*f/765)*3;background(s*255);m=1f/9;translate(250,250);rotate(s);for(i=0;i<999;i++){x=sin(i*m)*i+sin((f+i)/9)*9;y=cos(i*m)*i+cos((f+i)/9)*9;fill(-1);if(i%2==0)fill(0);circle(x,y,50);}}//#p5t
