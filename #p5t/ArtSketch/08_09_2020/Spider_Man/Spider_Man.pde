float x,y,a,b,f=21,t=35,c=250;
void setup(){size(500,500);frameRate(5);strokeWeight(9);fill(c,0,0,9);}
void draw(){f++;rect(0,0,500,500);if(f<20){a=c;b=c;x=c+sin(f)*500;y=c+cos(f)*500;line(c,c,x,y);}else{t++;x=c+sin(f)*t*9;y=c+cos(f)*t*9;line(a,b,x,y);a=x;b=y;if(t>34){t=0;f=0;}}}
