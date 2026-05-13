float x,y,d;int c,i=250;
void setup(){size(500,500);noStroke();colorMode(HSB,99);}
void draw(){fill(0,2);circle(x,y,99);fill(c);circle(x,y,d*9);d=dist(i,i,x,y)/99;x+=d*(x-i)/5;y+=d*(y-i)/5;if(x>500||x<0||y>500||y<0){c=color(random(99),60,50);x=random(150,350);y=random(150,350);}}
