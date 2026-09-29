// Bonk (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/09_20_2020/Bonk/Bonk.pde
// #p5t/ArtSketch/09_20_2020/Bonk/Bonk.pde

class P {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.u = i;
    this.s = i % 9;
  }

  d() {
    for (const o of p)
      if (dist(o.x, o.y, this.x, this.y) < 15) {
        n++;
        this.s += (this.x - o.x) / 9;
        this.u += (this.y - o.y) / 9;
      }
    this.s /= n;
    this.u /= n;
    fill((n - 1) * c, 0, c);
    this.x += this.s + c;
    this.y += this.u + c;
    text((n = 0), (this.x %= c), (this.y %= c));
  }
}

let i = 0,
  c = 500,
  n = 0;
let p = new Array(c);

function setup() {
  createCanvas(500, 500);
}

function draw() {
  while (i < c) p[i++] = new P();
  background(0); // clear()
  for (const o of p) o.d();
}
//#p5t

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

// ---- Original Processing source: #p5t/ArtSketch/09_20_2020/Bonk/Bonk.pde
/*
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
*/
