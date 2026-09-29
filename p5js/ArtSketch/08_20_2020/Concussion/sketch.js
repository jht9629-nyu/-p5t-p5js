// Concussion (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_20_2020/Concussion/Concussion.pde
// #p5t/ArtSketch/08_20_2020/Concussion/Concussion.pde

let f = 0;
let i = 99,
  n = 500;
let x = new Array(i).fill(0),
  y = new Array(i).fill(0),
  s = [],
  u = [];

function setup() {
  createCanvas(500, 500); // frame.setSize(500, 500) in draw()
  background(204); // Processing default background
}

function draw() {
  colorMode(HSB, 9);
  noStroke();
  for (i = 0; i < 99; i++) {
    if (f < 1) {
      s.push(sin(i) + 4);
      u.push(cos(i) + 4);
    }
    fill(i % 9, 9, 9, 1);
    circle(x[i], y[i], 9);
    x[i] += s[i];
    x[i] %= n;
    y[i] += u[i];
    y[i] %= n;
  }
  f++;
}

// ---- Original Processing source: #p5t/ArtSketch/08_20_2020/Concussion/Concussion.pde
/*
float f;int i=99,n=500;float[] x=new float[i],y=new float[i],s={},u={};void draw(){frame.setSize(n,n);colorMode(HSB,9);noStroke();for(i=0;i<99;i++){if(f<1){s=append(s,sin(i)+4);u=append(u,cos(i)+4);}fill(i%9,9,9,1);circle(x[i],y[i],9);x[i]+=s[i];x[i]%=n;y[i]+=u[i];y[i]%=n;}f++;}
*/
