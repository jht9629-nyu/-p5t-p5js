int x,y,c=480,f,a,b,z,i;
void setup(){size(480,480);}
void draw(){f++;for(x=0;x<c;x++)for(i=0;i<9;i+=2){a=i*48;b=(i+1)*48;z=(i+2)*48;set(x,a,color(noise(x/9f,(f+a)/9f)*c,0,f%c));for(y=a+1;y<b;y++)set(x,y,color(get(x,y-1),254));for(y=z;y>=b;y--)set(x,y,color(get(x,y-1)));}}//#p5t
