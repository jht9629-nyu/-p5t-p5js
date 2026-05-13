int s,a,b,x=250;
public void setup(){
  size(500,500);
  textSize(50);
  frameRate(500);}
public void draw(){clear();
  b--;
  rect(a,b,99,9);
  if(key=='a'){x--;}if(key=='d'){x++;}
  text(s,x,99);
  if (b<99){b=510;if(x>a&&x<a+99){s++;a=(int)random(0,400);}
  else {s=0;x=250;}}}
