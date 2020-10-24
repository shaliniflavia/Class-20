var x1,y1,w1,h1;
var x2,y2,w2,h2;

var color;

function setup() {
  createCanvas(400,400);

  x1 = 200;
  y1 = 200;
  w1 = 50;
  h1 = 100;

  w2 = 100;
  h2 = 50;


  color = "green";
  
}

function draw() {
  background(0);  

  fill(color);

  x2 = mouseX;
  y2 = mouseY;

  ellipse(x1,y1,w1,h1);
  ellipse(x2,y2,w2,h2);

  if(x2-x1 <= (w1+w2)/2 &&
    x1-x2 <= (w1+w2)/2 ){
    color = "red";
  }
  else{
    color = "green";
  }
}