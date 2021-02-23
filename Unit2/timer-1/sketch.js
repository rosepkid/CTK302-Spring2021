let myState = 0;
let myTimer = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (myState) {

    case 0:
      background('red');

      myTimer = myTimer + 1 ;
      if (myTimer > 3 * 60) {
        myTimer = 0 ;
        myState = 1 ;
      }

      break;

    case 1:
      background('green');

      myTimer = myTimer + 1 ;
      if (myTimer > 3 * 60) {
        myTimer = 0 ;
        myState = 2 ;
      }
      break;

    case 2:
      background('blue');
      myTimer = myTimer + 1 ;
      if (myTimer > 3 * 60) {
        myTimer = 0 ;
        myState = 0 ;
      }
      break;

  }


}
