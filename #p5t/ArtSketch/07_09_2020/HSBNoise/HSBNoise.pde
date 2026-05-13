int c,f;
public void setup(){
  size(500,500);
  colorMode(HSB,99);
}
public void draw(){f++;
  clear();
  for (int i=0;i<99;i++){
    for(int j=0;j<99;j++,c=0){
      fill((j+f/4f)%99,99,99);
      float r=noise((i+f/2f)/40f,j/40f);
      if(r<.5)c=1;
      text(c,i*20,j*20);}}}
      
//Never use frameCount, make int f instead, saves chars
//Use for loop to reset vars
//if using color mode, use 99, saves chars
//text gets you shapes with strokes and no fills (but uses fill color)
