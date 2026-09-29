// ColorVolcano (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_07_2020/ColorVolcano/ColorVolcano.pde
// #p5t/ArtSketch/08_07_2020/ColorVolcano/ColorVolcano.pde

class P {
  constructor(f) {
    this.x = 0;
    this.y = 0;
    this.u = 0;
    this.s = f;
  }
}

let a = [];
let f;

function setup() {
  createCanvas(500, 500);
  background(204); // Processing default background
  colorMode(HSB, 9);
  for (f = 0; f < 99; f++) {
    a.push(new P(f));
  }
}

function draw() {
  f++;
  for (const e of a) {
    fill(floor(f / 9) % 9, 9, 9); // Java int division
    square((e.x += e.s), (e.y -= e.u), e.u--);
    if (e.y > 500) {
      e.x = 250;
      e.y = 99;
      e.s = sin(floor(f / 9)) * 9; // Java int division
      e.u = random(9);
    }
  }
}

// ---- Original Processing source: #p5t/ArtSketch/08_07_2020/ColorVolcano/ColorVolcano.pde
/*
p[] a={};int f;void setup(){size(500,500);colorMode(HSB,9);for(f=0;f<99;f++){a=(p[])append(a,new p(f));}}void draw(){f++;for(p e:a){fill((f/9)%9,9,9);square(e.x+=e.s,e.y-=e.u,e.u--);if(e.y>500){e.x=250;e.y=99;e.s=sin(f/9)*9;e.u=random(9);}}}class p{float x,y,u,s;p(int f){s=f;}}
*/
