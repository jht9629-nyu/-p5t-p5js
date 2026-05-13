int x,y,i,h=240;float f,b=15.2;
float[] s=new float[h*h*4];
void draw(){frame.setSize(480,480);colorMode(HSB,h);noStroke();for(x=0;x<h*2;x++)for(y=0;y<h*2;){if(f<1)s[i]=sin(x/b-y/b)*cos(x/b+y/b)*h;else{s[i]++;set(x,y,color(h*((.25*s[i]+f*5)%h)/h,h,h,20));}i=x+y++*h;}f+=.2;}//#p5t
