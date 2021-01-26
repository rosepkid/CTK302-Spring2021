
let f1 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  f1 = loadFont("assets/browniesCake.ttf") ;
}

function draw() {
  background(100) ;
  textSize(120) ;
  textFont(f1) ;
  text("hello", width/2, height/2) ;
}
