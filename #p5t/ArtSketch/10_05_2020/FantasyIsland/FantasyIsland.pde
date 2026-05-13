int x,y,m,c;float f,a,n=99;void setup(){size(480,480);colorMode(3,9);}void draw(){if(m<1){f=0;clear();noiseSeed(int(random(n)));}f+=.02;x=m=0;for(;x<480;x++)for(y=0;y<480;y++){a=noise(x/n,y/n);c=get(x,y);if(a<f/9&red(c)<1){set(x,y,color(((f+.6)*.67)%9,9,9));}m+=hue(c)<1?1:0;}}//#p5t

//+(sin(x/99)+1)+(cos(y/99)+1);
