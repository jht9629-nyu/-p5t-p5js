// MazeMaker (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/05_20_2021/MazeMaker/MazeMaker.pde
// #p5t/ArtSketch/05_20_2021/MazeMaker/MazeMaker.pde

let spots = [];

let prev, current;
let s = 480;

function setup() {
  createCanvas(480, 480);
  background(204); // Processing default background
  current = createVector();
  prev = current;
}

function draw() {
  stroke(0);
  rect(current.x, current.y, 10, 10);
  noStroke();
  rect((current.x + prev.x) / 2 + 1, (current.y + prev.y) / 2 + 1, 9, 9);

  spots.push(current);

  let spotPos = spots.length;

  while (has(spots, current)) {
    if (--spotPos < 0) {
      background(0); // clear()
      spots = [];
      break;
    }
    current = spots[spotPos];
    let options = [];
    options.push(createVector(current.x + 10, current.y));
    options.push(createVector(current.x - 10, current.y));
    options.push(createVector(current.x, current.y + 10));
    options.push(createVector(current.x, current.y - 10));

    while (options.length > 0) {
      let i = floor(random(0, options.length));
      let next = options[i];
      if (!has(spots, next) && next.x > -1 && next.y > -1 && next.x < s && next.y < s) {
        prev = current;
        current = options[i];
        break;
      } else {
        options.splice(i, 1);
      }
    }
  }
}

// ArrayList.contains(): PVectors are equal when their coordinates match.
function has(list, v) {
  return list.some((u) => u.x == v.x && u.y == v.y && u.z == v.z);
}

// ---- Original Processing source: #p5t/ArtSketch/05_20_2021/MazeMaker/MazeMaker.pde
/*
ArrayList<PVector> spots = new ArrayList<PVector>();

PVector prev,current = new PVector();
int s=480;

void setup(){
  size(480,480);
  prev=current;
}

void draw(){
  stroke(0);
  rect(current.x,current.y,10,10);
  noStroke();
  rect((current.x + prev.x)/2+1,(current.y + prev.y)/2+1,9,9);
  
  spots.add(current);
  
  int spotPos = spots.size();
  
  while(spots.contains(current)){
    if(--spotPos<0){
      clear();spots.clear();break;
    }
    current = spots.get(spotPos);
    ArrayList<PVector> options = new ArrayList<PVector>();
    options.add(new PVector(current.x+10,current.y));
    options.add(new PVector(current.x-10,current.y));
    options.add(new PVector(current.x,current.y+10));
    options.add(new PVector(current.x,current.y-10));
    
    while(options.size() > 0){
      int i = (int)random(0, options.size());
      PVector next = options.get(i);
      if(!spots.contains(next) && next.x > -1 && next.y > -1 && next.x < s && next.y < s){
        prev = current;
        current=options.get(i);
        break;
      } else {
        options.remove(i);
      }
    }
  }
}
*/
