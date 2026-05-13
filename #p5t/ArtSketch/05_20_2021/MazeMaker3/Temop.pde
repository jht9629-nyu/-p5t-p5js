//ArrayList<PVector> v = new ArrayList<PVector>();

//PVector n,c=new PVector(),p=c;
//int s=480,i,l,m;

//void draw(){
//  frame.setSize(s,s);//frameRate(s);
//  noStroke();
//  square(c.x,c.y,7);
//  square(c.x/2 + p.x/2,(c.y + p.y)/2,7);
  
//  v.add(c);
  
//  l = v.size();
//  while(v.contains(c))
//    if(--l<0){
//      c=p;fill(random(255),random(255),random(255));clear();v.clear();
//    } else {
//    c = v.get(l);
//    for(m=-8;m<9;m+=8){
//        o.add(new PVector(c.x+m,c.y));
//      o.add(new PVector(c.x,c.y+m));}
//    while(o.size() > 0){
//      i = l%o.size();//second()%o.size();
//      n = new PVector(c.x+m,c.y);
//      if(!v.contains(n) & n.x > -1 & n.y > -1 & n.x < s & n.y < s){
//        p=c;
//        c=n;
//        break;
//      } else o.remove(i);
//    }
//    }
//}
