let cars = [];
let f1, f2, f3;
let bg;
let fonts = [];
let maxCars = 5;
let frogPos;
let state = 0;
let timer = 0;

function setup() {
  createCanvas(600, 600);
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  rectMode(CENTER);

  f1 = loadFont("assets/KGChasingCars.ttf");
  f2 = loadFont("assets/rock.ttf");
  f3 = loadFont("assets/spaceage.ttf");
  bg = loadImage("assets/fallPic.jpg");

  fonts = [f1, f2, f3];

  // Spawn objects
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
}

function draw() {
  switch (state) {
    case 0:
      background('grey');
      textSize(32) ;
      text("Welcome to my game!", width / 2, height / 2);
// image for menu! welcome to my game!
      break;

    case 1:
      game();
      timer++;
      if (timer > 10 * 60) {
        state = 3;
      }
      break;

    case 2:
      background('red');
      fill('white');
      textSize(20);
      text("YAY YOU WON!!", width / 2, height / 2);
      break;

    case 3:
      background('purple');
      fill('yellow');
      textSize(20);
      text("BOO YOU LOST!!", width / 2, height / 2);
      break;

  }

}


function game() {

  image(bg, 0, 0, width, height);

  // display and move objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }

  }

  if (cars.length == 0) {
    state = 2;
  }

  // draw the frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();


}


function resetTheGame() {
  cars = [];
  for (let i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }
  timer = 0;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1;
      break;

    case 2: // they won!
      resetTheGame();
      state = 0;
      break;

    case 3: // they lost!
      resetTheGame();
      state = 0;
      break;

  }

}


// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.size = random(40, 80);
    this.c = color(random(150, 200), random(50), random(50));


    let b = floor(random(3)); // random number between 0 - 2.99999
    this.font = fonts[b];
  }

  // methods

  display() {
    //  rect(this.pos.x, this.pos.y, 50, 25);
    fill(this.c);
    textFont(this.font);
    textSize(this.size);
    text("vote", this.pos.x, this.pos.y);
    // image(name, this.pos.x, this.pos.y) ;

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
