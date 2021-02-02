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
  text("Lorem ipsum dolor\nsit\' amet, consectetur\' adipiscing elit. Nulla a erat at lorem scelerisque rutrum id ut lacus. Suspendisse eget massa sit amet lacus ullamcorper fermentum vel in purus. Vivamus porta laoreet augue. Ut dictum, tortor convallis efficitur ultricies, ipsum arcu suscipit felis, eu mollis leo erat sed nisl. Sed condimentum justo mollis lectus ultricies, non dignissim sapien luctus. Nunc elementum iaculis orci, sed venenatis tellus elementum id. Nunc commodo velit sit amet justo lobortis, sit \namet vulputate est laoreet. Nam sit amet iaculis dolor. Maecenas imperdiet cursus mollis. Donec vehicula ornare lectus, sit amet vehicula lectus vehicula non.", 40, 40, 680, 400);

}
