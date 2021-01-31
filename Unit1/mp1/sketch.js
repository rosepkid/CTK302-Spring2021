function setup() {

  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {
  background('#42248f');
  noStroke();

    fill('yellow');
  ellipse(0, 0, 200, 200);

  fill(255, 50);
  ellipse(400, 90, 400, 300);

  fill('brown');
  triangle(400, 200, 600, 200, 500, 100);

  fill(100, 80, 80);
  rect(430, 200, 140, 180);

  fill('brown');
  quad(189, 80, 216, 80, 216, 360, 144, 360);

  fill('green');
  ellipse(200, 120, 200);

  fill(100, 200, 80);
  rect(0, 360, 720, 40);

  fill('light blue');
  text("a summer scene", 40, 360);

}
