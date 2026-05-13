int x,y,t;float h,s,b,d,f,c=255;

void setup(){size(500,500);colorMode(HSB,c);}
void draw(){f++;f=f%c;for(x=0;x<500;x++){for(y=0;y<500;y++){t=get(x,y);h=hue(t);s=c;b=brightness(t);d=dist(x,y,c,c);b+=(d<f&d>f*.4)?2:-4;
 set(int(random(4)-2)+x,int(random(4)-2)+y,color(h+1,c,b));}}}
//int x,y,t,c;float h,s,b,d,f,a=255;
//void setup(){
//  size(500,500);colorMode(HSB,a);
//}
//void draw(){
//  f++;f=f%a;
//  for(x=0;x<500;x++){
//    for(y=0;y<500;y++){
//      t=get(x,y);h=hue(t);s=saturation(t);b=brightness(t);
//      d=dist(x,y,a,a);
//      c=(d<f&d>f*.4)?color(h+1,s+2,b+2):color(h,s,b-4);
//      set(int(random(4)-2)+x,int(random(4)-2)+y,c);
//    }
//  }
//}
