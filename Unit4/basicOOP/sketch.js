let myCar1;
let vel = 1 ; 

function setup() {
  createCanvas(500, 500);
  myCar1 = new Cloud();
}

function draw() {
  background('grey');
  myCar1.display();
  myCar1.update();
}


class Cloud {

  constructor() {
    // attributes
    this.x = 100;

  }

  // methods

  display() {
    ellipse(this.x, 100, 50, 25);
  }

  update() {
    this.x = this.x + vel;
    if (this.x > width) this.x = 0 ;
  }

}
