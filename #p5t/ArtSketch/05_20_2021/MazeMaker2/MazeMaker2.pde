ArrayList<PVector> o,v = new ArrayList<PVector>();

PVector n,c=new PVector(),p=c;
int s=480,i,l,m;

void draw(){
  colorMode(HSB,9);
  frame.setSize(s,s);
  noStroke();
  square(c.x,c.y,7);
  square(c.x/2 + p.x/2,(c.y + p.y)/2,7);
  
  v.add(c);
  
  l = v.size();
  while(l>0){
    c = v.get(--l);
    o = new ArrayList();
    for(m=-8;m<9;m+=8){
        o.add(new PVector(c.x+m,c.y));o.add(new PVector(c.x,c.y+m));}
    while(o.size() > 0){
      //i = second()%o.size();//l%o.size();
      n = o.get(i = second()%o.size());
      if(!v.contains(n) & n.x > -1 & n.y > -1 & n.x < s & n.y < s){
        p=c;
        c=n;l=-2;
        break;
      } else o.remove(i);
    }
    }
    
    if(l>-2){
      c=p;fill(random(9),5,5);clear();v.clear();
    } 
}
