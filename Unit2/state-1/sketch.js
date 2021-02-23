let state = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  switch (state) {

    case 0:
      background(100);
      text("state 0 ", 100, 100);


      pattern() ; 
      break;

    case 1:
      background('red');
      text("state 1 ", 100, 100);
      break;

    case 2:
      background('blue');
      text("state 2 ", 100, 100);
      break;

    case 3:
      background('yellow');
      text("state 3 ", 100, 100);
      break;

    case 4:
      background('silver');
      text("state 4 ", 100, 100);
      break;
  }

}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }

}


function pattern() {
  for (let j = 0; j <= height; j++) {
      for (let i = 0; i <= width; i++) {
        fill(0, 200, 0);
        rect(i * 40, j * 40, 50, 10);
      }
    }
}
