int x,y,i,a,b,o=-1,p=0,t,c=1,n=500,m; 
void draw(){m=x=0;
 for(;x<n;x++)for(y=0;y<n;y++){t=(int)red(get(x,y));
 if(c>0?t>0:t<255){a=x+i%3-1;b=y+i++/3-1;set(a,b,color(red(get(a,b))+c));i%=9;m++;}}
 if(m==n*n){t=o;o=p;p=t;c*=-1;background(p);set(99,99,o);}frame.setSize(n,n);}//#p5t
