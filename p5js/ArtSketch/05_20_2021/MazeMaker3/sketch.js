// MazeMaker3 (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_20_2021/MazeMaker3/MazeMaker3.pde
// #p5t/ArtSketch/05_20_2021/MazeMaker3/MazeMaker3.pde

let v = [];

let n,
  c,
  p;
let s = 480,
  i,
  l,
  m;

function setup() {
  createCanvas(s, s); // frame.setSize(s, s) in draw()
  background(204); // Processing default background
  c = createVector();
  p = c;
}

function draw() {
  colorMode(HSB, 9);
  noStroke();
  square(c.x, c.y, 7);
  square(c.x / 2 + p.x / 2, (c.y + p.y) / 2, 7);

  v.push(c);

  l = v.length;
  while (has(v, c))
    if (--l < 0) {
      c = p;
      fill(random(9), 5, 5);
      background(0); // clear()
      v = [];
    } else {
      c = v[l];
      for (m = -8; m < 9; m += 8) {
        n = createVector(c.x + m, c.y);
        if (!has(v, n) && n.x > -1 && n.x < s) {
          p = c;
          c = n;
          break;
        }
        n = createVector(c.x, c.y + m);
        if (!has(v, n) && n.y > -1 && n.y < s) {
          p = c;
          c = n;
          break;
        }
      }
    }
}

// ArrayList.contains(): PVectors are equal when their coordinates match.
function has(list, v) {
  return list.some((u) => u.x == v.x && u.y == v.y && u.z == v.z);
}

// ---- Original Processing source: #p5t/ArtSketch/05_20_2021/MazeMaker3/MazeMaker3.pde
/*
ArrayList<PVector> v = new ArrayList<PVector>();

PVector n,c=new PVector(),p=c;
int s=480,i,l,m;

void draw(){
  colorMode(HSB,9);
  frame.setSize(s,s);//frameRate(s);
  noStroke();
  square(c.x,c.y,7);
  square(c.x/2 + p.x/2,(c.y + p.y)/2,7);
  
  v.add(c);
  
  l = v.size();
  while(v.contains(c))
    if(--l<0){
      c=p;fill(random(9),5,5);clear();v.clear();
    } else {
    c = v.get(l);
    for(m=-8;m<9;m+=8){
      n = new PVector(c.x+m,c.y);
      if(!v.contains(n) & n.x > -1 & n.x < s){
        p=c;
        c=n;
        break;
      } 
      n = new PVector(c.x,c.y+m);
      if(!v.contains(n) & n.y > -1 & n.y < s){
        p=c;
        c=n;
        break;
      } 
    }
    }
}
*/
