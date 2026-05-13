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
