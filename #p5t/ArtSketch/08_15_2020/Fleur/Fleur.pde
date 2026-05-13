class L{float x,y,u,s=500;}L l=new L();

void draw(){frame.setSize(500,500);colorMode(HSB,9);l.y++;l.y%=500;stroke(l.y/9%9,9,9);b(l);}

void b(L l){if(abs(l.s+l.u)>1){rect(l.x,l.y,l.s,l.u);L a=new L();a.s=l.u/2;a.u=l.s/2;a.x=l.x+a.u;a.y=l.y+a.s;b(a);a.s*=-1;a.u*=-1;b(a);}}
//#p5t
