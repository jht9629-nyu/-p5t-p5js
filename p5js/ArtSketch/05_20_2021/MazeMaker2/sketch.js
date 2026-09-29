// MazeMaker2 (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_20_2021/MazeMaker2/MazeMaker2.pde
// #p5t/ArtSketch/05_20_2021/MazeMaker2/MazeMaker2.pde

// Which way the maze turns depends on the clock: second() % options.
let o,
  v = [];

let n,
  c,
  p;
let s = 480,
  i = 0,
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
  while (l > 0) {
    c = v[--l];
    o = [];
    for (m = -8; m < 9; m += 8) {
      o.push(createVector(c.x + m, c.y));
      o.push(createVector(c.x, c.y + m));
    }
    while (o.length > 0) {
      //i = second()%o.size();//l%o.size();
      n = o[(i = second() % o.length)];
      if (!has(v, n) && n.x > -1 && n.y > -1 && n.x < s && n.y < s) {
        p = c;
        c = n;
        l = -2;
        break;
      } else o.splice(i, 1);
    }
  }

  if (l > -2) {
    c = p;
    fill(random(9), 5, 5);
    background(0); // clear()
    v = [];
  }
}

// ArrayList.contains(): PVectors are equal when their coordinates match.
function has(list, v) {
  return list.some((u) => u.x == v.x && u.y == v.y && u.z == v.z);
}

// ---- Original Processing source: #p5t/ArtSketch/05_20_2021/MazeMaker2/MazeMaker2.pde
/*
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
*/
