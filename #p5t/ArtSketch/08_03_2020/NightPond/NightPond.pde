float i,f,o=50,x=500,b=300;
void setup(){size(500,500);colorMode(HSB,9);background(4,9,3);stroke(0);}
void draw(){f+=.1;if(f%9<.15)i=random(x);fill(0,.3);rect(0,0,x,b);fill(9);circle(o,o,o);text('*',random(x),random(b));fill(5,5,5);ellipse(x,x,x*3,b);ellipse(i,450,f%9*9,f%9*5);}
