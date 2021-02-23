let x = 0 ;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100) ;
  textSize(100) ;
  text("HULK RUNNING FROM A MODERN ROMANCE", x, height/2) ;

  x += 7 ;

  if (x > width) {
    x = -300 ;
  }
}
