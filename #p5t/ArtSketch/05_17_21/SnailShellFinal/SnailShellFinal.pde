int m=-1,s=480,x,y=m,o=s/2,p=o,n=#000000,a=n,T;
void setup(){size(480, 480);clear();}void draw(){loadPixels();T=pixels[o+p*s];if(a==T){T=n;if(x!=0){y=x;x=0;}else{x=-y;y=0;}a=a>n?n:m;}else{a=a<m?T=n:(T=m);if(x!=0){y=-x;x=0;}else{x=y;y=0;}}set(o,p,T);o+=x+s;o%=s;p+=y+s;p%=s;}//#p5t
