// https://editor.p5js.org/jht9629-nyu/sketches/6QdozLlq3
// matt-parker-08_11-CovidCases
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_11_2020/CovidCases/CovidCases.pde
// #p5t/ArtSketch/08_11_2020/CovidCases/CovidCases.pde

// Reads the (now archived) New York Times US Covid-19 dataset.
let t;
let f = 0;

async function setup() {
  // No header argument: row 0 is the header row, as in Processing.
  t = await loadTable(
    'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv',
    ','
  );
  createCanvas(500, 500);
  fill(255); // Processing's default fill; p5 draws text black until fill() is called
  frameRate(9);
  textSize(36);
  textAlign(CENTER);
}

function draw() {
  f = f < t.getRowCount() - 1 ? f + 1 : 1;
  background(0); // clear()
  text(
    t.getString(f, 0) +
      '\nCovid Cases:\n1 in ' +
      floor(331002651 / t.getNum(f, 1)) +
      ' Americans',
    250,
    200
  );
}
//#p5t

// ---- Original Processing source: #p5t/ArtSketch/08_11_2020/CovidCases/CovidCases.pde
/*
Table t;int f;void setup(){size(500,500);frameRate(9);textSize(36);textAlign(CENTER);t=loadTable("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv");}
void draw(){f=(f<t.getRowCount()-1)?f+1:1;clear();text(t.getString(f,0)+"\nCovid Cases:\n1 in "+int(331002651/t.getInt(f,1))+" Americans",250,200);}//#p5t
*/
