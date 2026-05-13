int s=480,m=99,j,i,h,c;void setup(){size(480,480);}
void draw(){float o=-1.5,d=3f/s,y=o,x;h++;c=h;for(j=0;j++<s;){x=o;for(i=0;i++<s;){float a=x,b=y,n=0,l=4;while(n++<m){float q=a*a,u=b*b,z=sqrt(q+u),v=2*a*b;if(z>l)break;a=q-u+x;b=v+y;q=z;}set(i,j,n<m?c--:-c*s);x+=d;}y+=d;}}//#p5t
