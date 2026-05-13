Table t;int f;void setup(){size(500,500);frameRate(9);textSize(36);textAlign(CENTER);t=loadTable("https://raw.githubusercontent.com/nytimes/covid-19-data/master/us.csv");}
void draw(){f=(f<t.getRowCount()-1)?f+1:1;clear();text(t.getString(f,0)+"\nCovid Cases:\n1 in "+int(331002651/t.getInt(f,1))+" Americans",250,200);}//#p5t
