void setup(){size(500,500);}class P{float x,y,u=i,s=i%9;void d(){for(P o:p)if(dist(o.x,o.y,x,y)<15){n++;s+=(x-o.x)/9;u+=(y-o.y)/9;}s/=n;u/=n;fill((n-1)*c,0,c);x+=s+c;y+=u+c;text(n=0,x%=c,y%=c);}};int i,c=500,n;P[] p=new P[c];void draw(){frame.setSize(c,c);while(i<c)p[i++]=new P();clear();for(P o:p)o.d();}//#p5t

//class P{ 
//  float x,y,u=i,s=i%9;
//  void d(){
//    for(P o:p)
//      if(dist(o.x,o.y,x,y)<15){
//      n++;
//      s+=(x-o.x)/9;
//      u+=(y-o.y)/9;}
//  s/=n;u/=n;
//  fill((n-1)*c,0,c);
//  x+=s+c;y+=u+c;
//  text(n=0,x%=c,y%=c);//n=s=u=0;
//}};
  
//int i,c=500,n;
//P[] p=new P[c];

//void draw(){
//  frame.setSize(c,c);
//  while(i<c)p[i++]=new P();
//  clear();
//  for(P o:p)o.d();
//}
