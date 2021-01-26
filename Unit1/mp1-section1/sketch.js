function setup() {
  createCanvas(600, 400);
}

function draw() {

  background('black');
  noStroke();

  fill(0, 0, 100);
  triangle(18, 18, 18, 360, 130, 360);

  fill('blue') ;
  ellipse(256, 100, 200, 100) ;
    fill(0, 50, 100) ;
  ellipse(300, 130, 200, 100) ;
     fill(0, 70, 200) ;
  ellipse(353, 49, 100, 50) ;
  triangle(178 , 199, 168 , 186, 140 , 231) ;

  fill('white') ;
  text(mouseX + " , " + mouseY, 10, 20) ;

}

function mouseReleased() {
  print(mouseX + " , " + mouseY) ;
}
