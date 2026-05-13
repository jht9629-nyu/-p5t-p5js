int m,x,y,c,o=color(1),p=-1,s;

void setup(){
  size(480,480);
}

void draw(){
  m=0;
  for(x=0;x<480;x++)
   for(y=0;y<480;y++){
     if(dist(x,y,420,420)<50)set(x,y,p);
     set(470,470,o);
     set((int)random(4)-2+x,(int)random(4)-2+y,get(x,y)==p?p:o);
   }
}//#p5t
