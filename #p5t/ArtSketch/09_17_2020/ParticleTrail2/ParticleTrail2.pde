int c=250,i=c*c;
class P{float l,x,y,u,s,f;void d(){f++;l-=random(9);x+=s;y+=u;u+=.1;fill(c-l,l,l,l);text('.',x,y);if(l<1){l=c;s=sin(u);u/=-2;x=sin(f/8)*c+c;y=cos(f/9)*c+c;}}};P[] p=new P[i];
void draw(){frame.setSize(500,500);while(i>0)p[--i]=new P();clear();for(P o:p)o.d();}//#p5t
