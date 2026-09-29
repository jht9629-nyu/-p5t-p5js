// CovidCases (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/08_11_2020/CovidCases/CovidCases.pde
// #p5t/ArtSketch/08_11_2020/CovidCases/CovidCases.pde

// Reads the (now archived) New York Times US Covid-19 dataset.
let t;
let f = 0;

function preload() {
  // No 'header' option: row 0 is the header row, as in Processing.
  t = loadTable(
    'https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv',
    'csv'
  );
}

function setup() {
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
