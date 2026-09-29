// HSBNoise (p5.js 1.11.12 port of a #p5t Processing sketch)
// https://github.com/madparker/-p5t/blob/main/%23p5t/ArtSketch/07_09_2020/HSBNoise/HSBNoise.pde
// #p5t/ArtSketch/07_09_2020/HSBNoise/HSBNoise.pde

let c = 0,
  f = 0;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 99);
}

function draw() {
  f++;
  background(0); // clear()
  // The original looped i and j to 99, but only 0..25 land on the 500px
  // canvas; stopping there draws the same image far faster in the browser.
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++, c = 0) {
      fill((j + f / 4) % 99, 99, 99);
      let r = noise((i + f / 2) / 40, j / 40);
      if (r < 0.5) c = 1;
      text(c, i * 20, j * 20);
    }
  }
}

//Never use frameCount, make int f instead, saves chars
//Use for loop to reset vars
//if using color mode, use 99, saves chars
//text gets you shapes with strokes and no fills (but uses fill color)

// ---- Original Processing source: #p5t/ArtSketch/07_09_2020/HSBNoise/HSBNoise.pde
/*
int c,f;
public void setup(){
  size(500,500);
  colorMode(HSB,99);
}
public void draw(){f++;
  clear();
  for (int i=0;i<99;i++){
    for(int j=0;j<99;j++,c=0){
      fill((j+f/4f)%99,99,99);
      float r=noise((i+f/2f)/40f,j/40f);
      if(r<.5)c=1;
      text(c,i*20,j*20);}}}
      
//Never use frameCount, make int f instead, saves chars
//Use for loop to reset vars
//if using color mode, use 99, saves chars
//text gets you shapes with strokes and no fills (but uses fill color)
*/
