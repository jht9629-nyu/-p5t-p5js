int x,y,i,w=480,f;int[]b=new int[w*w],n=new int[w*w],t;
void draw(){f++;frame.setSize(480,480);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){b[i=x+y*w]+=dist(x,y,sin(f)*w,sin(f)*w)<6?w:0;b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i];set(x,y,color(0,99,b[i]));}t=n;n=b;b=t;}//#p5t

void setup(){size(480,480);}
/*
int x,y,i,j,w=480,f,k,p;
int[]b=new int[w*w],n=new int[w*w],t;

void setup(){size(480,480);}

void draw(){
  p=k=240+int(sin(f++)*99);
  
  for(y=0;++y<w-1;)
    for(x=0;++x<w-1;){
      b[i=x+y*w]+=dist(x,y,p,k)<9?999:0;
      set(x,y,b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i]);
      
      if(i==240+240*480){
        println(b[i]);
      }
    }
t=n;n=b;b=t;
}
*/
