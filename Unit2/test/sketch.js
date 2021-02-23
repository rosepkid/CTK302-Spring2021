function setup() {
  createCanvas(500, 500);
}

function draw() {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      ellipse(i*20, j*20, 10, 10) ;
    }
  }
}
