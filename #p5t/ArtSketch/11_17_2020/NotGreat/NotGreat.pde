int x,y,i,w=480,p,a,f;int[]b=new int[w*w],n=new int[w*w],t;void draw(){f++;frame.setSize(w,w);for(y=0;++y<w-1&f>1;)for(x=0;++x<w-1;){a=b[i=x+y*w]+=dist(x,y,240,f%w)<4?w:0;b[i]=p=0;for(;p<9;)b[i]+=n[(x+p%3-1)+(y+p++/3-1)*w]/9;b[i]-=a;set(x,y,color(b[i]/2,0,0));}t=n;n=b;b=t;}//#p5t

//int x, y, i, w=480,p,a,f;
//int[]b=new int[w*w],n=new int[w*w],t;
//void draw() {
//  f++;
//  frame.setSize(w, w);
//  for (y=0;++y<w-1&f>1;)for(x=0;++x<w-1; ){
//    b[i=x+y*w]+=dist(x,y,240+sin(f/9f)*(f%w),240+cos(f/9f)*(f%w))<6?w:0;
//    a=b[i];
//    b[i]=p=0;
//    for(;p<9;p++)b[i]+=n[(x+p%3-1)+(y+p/3-1)*w];
//    b[i]=b[i]/7-a;
//    set(x, y,color(b[i]/2,0,0));
//  }
//  t=n;
//  n=b;
//  b=t;
//}//#p5t
