int f,n=1;

void setup() {
  size(480,480);
  smooth(1);
  colorMode(3,480);
  rectMode(CENTER);
}

void draw() {
  translate(240,240);
  rotate(f);
  stroke(f,480,480);
  square(0,0,f);
  f-=n;
  if(f<0|f>650){
    n*=-1;
  } 
  if(n>0){fill(0,240);}
  else{fill(0,9);}
}//#p5t
