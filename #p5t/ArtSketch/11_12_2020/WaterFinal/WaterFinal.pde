int x,y,i,w=480,f;
int[]b=new int[w*w],n=new int[w*w],t;
void draw(){f++;frame.setSize(w,w);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){b[i=x+y*w]+=dist(x,y,sin(f)*w,cos(f)*w/2)<6?w:0;b[i]=(n[i+1]+n[i-1]+n[x+(y+1)*w]+n[x+(y-1)*w])/2-b[i];set(x,y,color(0,b[i]/9,w));}t=n;n=b;b=t;}//#p5t
