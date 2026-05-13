int f,m,x,y,c,o=#000000,p=-1,n=500;
void draw(){
for(x=m=0;x++<n;)for(y=0;y<n;){
if(f<2){c=(int)dist(x,y,250,250);c=c==99|c==199|c>300?o:p;set(x,y,c);}if(get(x,y++)==o)set((int)random(4)-2+x,(int)random(4)-2+y,o);else m++;}
f++;if(m<=n){c=o;o=p;f=1;p=c;}frame.setSize(n,n);}//#p5t
