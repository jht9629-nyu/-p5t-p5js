int x,y,t,a,b;void setup(){size(500,500);colorMode(RGB,1);}void draw(){loadPixels();for(x=1;x<499;x++){for(y=1;y<499;y++){t=0;for(a=x-1;a<x+2;a++){for(b=y-1;b<y+2;b++){t+=red(pixels[a+b*500]);}}t=t==3?-1:t!=4?color(0):0;if(t<0)set(x,y,t);if((x*2&y|-x*2&y)<1)set(x,y,color(1));}}}

//int x,y,t,a,b;void setup(){size(500,500);colorMode(RGB,1);}void draw(){loadPixels();for(x=1;x<499;x++){for(y=1;y<499;y++){t=0;for(a=x-1;a<x+2;a++){for(b=y-1;b<y+2;b++){t+=red(get(a,b));}}t=t==3?-1:t!=4?color(0):0;if(t<0)set(x,y,t);if((x*2&y|-x*2&y)<1)set(x,y,color(1));}}}
