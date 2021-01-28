
let f1, f2 ;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
  f1 = loadFont("assets/browniesCake.ttf") ;
  f2 = loadFont("assets/secretWinter.ttf") ;

}

function draw() {
  background(100) ;
  textSize(120) ;
  textFont(f1) ;
  text("hello", width/2, height/2) ;
  textFont(f2, 21) ;
  text("world", width/2, height/2+40) ;
}
