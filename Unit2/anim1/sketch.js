let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;
//  rect(x, 100, 100, 100) ;
textSize(48) ;
text("HULK RUNNING IN 2D", x, height/2) ;

  x = x + 10 ;

  if (x > width) {
    x = -200 ;
  }

}
