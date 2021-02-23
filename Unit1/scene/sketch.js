function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background('#42248f');
   noStroke();

  // first tree
   fill(204);
   triangle(108, 15, 66, 213, 152, 213);
  fill('brown') ;
  rect(89, 213, 50, 200) ;

  // tree trunk
  fill('brown');
  rect(230, 170, 63, 200);

  // tree leaves
    fill('green');
  ellipse(260, 120, 150, 150);

    fill(204);
  triangle(288, 18, 351, 360, 288, 360);

//   fill(204);
//   quad(189, 18, 216, 18, 216, 360, 144, 360);

//   fill(255);
//   ellipse(252, 144, 72, 72);



//   fill(255);
//   arc(479, 300, 280, 280, PI, TWO_PI);

  fill('white') ;

  text(mouseX + ', ' + mouseY, 20, 20) ;
}
