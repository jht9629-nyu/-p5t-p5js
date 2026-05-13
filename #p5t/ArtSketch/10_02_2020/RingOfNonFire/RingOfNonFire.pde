class P{float x,y;}
P p = new P(),o = new P();
float f;

void draw(){//f+=.1;
  fill(255,9);
  rect(0,0,480,480);
  noFill();
  frame.setSize(480,480);
  
  //quad(0,0,480,0,250,400,400, 400);
    
  // 
    
  //for(int i=0; i<3; i++){
    d(f);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+1);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+2);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    d(f+3);quad(0,0,480,0,p.x,p.y,o.x,o.y);
    //quad(0,0,480,0,240,240,140,240); 
    //d(i);quad(480,0,480,480,p.x,p.y,o.x,o.y);
    //d(i);quad(480,480,0,480,p.x,p.y,o.x,o.y);
    //d(i);quad(0,480,0,0,p.x,p.y,o.x,o.y);
  //}
  
  println(o.x + "x" + o.y);
}

void d(float w){
  p.x=240+sin(w*TAU/4+f)*100;
  p.y=240+cos(w*TAU/4+f)*100;
  o.x=240+sin((w+1)*TAU/4+f)*100;
  o.y=240+cos((w+1)*TAU/4+f)*100;
}
