let f1, f2 ;
let sound1 ;
let song1 ;

let x = 0 ;

function preload() {

}

function setup() {
  //Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 500);
  textAlign(CENTER);


}

function draw() {

  if (mouseIsPressed) {
  //sky
  background(220, 100, 170);
  fill(25, 10, 50);
  rect(0, 0, 720, 100);
    fill(60, 10, 120);
    rect(0, 100, 720, 50);
      fill(110, 20, 130);
      rect(0, 150, 720, 40);

  //moon
  fill(230,230,250);
  ellipse(300, 100, 100, 100);
  fill(210,220,230);
  ellipse(320, 120, 20, 20);
  ellipse(305, 105, 15, 15);
  ellipse(265, 90, 20, 20);
  ellipse(280, 70, 10, 10);
  ellipse(285, 95, 10, 10);

  //clouds
  fill(210,220,230);
  ellipse(252, 144, 200, 72);
    ellipse(225, 115, 120, 60);
  ellipse(500, 96, 180, 60);
    ellipse(580, 120, 200, 48);

    //mountains light
    fill(200,210,230);
    quad(50, 200, 150, 260, 150, 360, 100, 360);
      quad(175, 250, 230, 300, 250, 360, 200, 360);
        quad(265, 265,300, 300, 350, 360, 300, 360);
          quad(350, 285, 430, 300, 430, 360, 400, 360);

         quad(430, 300, 490, 275, 445, 360, 430, 360);
       quad(510, 300, 550, 260, 530, 360, 480, 360);
    quad(600, 300, 675, 200, 650, 360, 600, 360);

    //mountains dark
    fill(100,110,130);
    quad(0, 250, 50, 200, 100, 360, 0, 360);
      quad(150, 260, 175, 250, 200, 360, 150, 360);
        quad(230, 300, 265, 265, 300, 360, 250, 360);
          quad(300, 300, 350, 285, 400, 360, 350, 360);
            triangle(430, 315, 460, 360, 375, 360);
         quad(490, 275, 510, 300, 480, 360, 445, 360);
       quad(550, 260, 600, 300, 600, 360, 530, 360);
    quad(675, 200, 720, 250, 720, 360, 650, 360);

    //forest
    fill(20,70,70);
    triangle(20, 280, 40, 360, 0, 360);
    triangle(40, 260, 60, 360, 20, 360);
    triangle(60, 270, 80, 360, 40, 360);
      triangle(100, 280, 120, 360, 80, 360);
      triangle(120, 260, 140, 360, 100, 360);
      triangle(140, 270, 160, 360, 120, 360);
        triangle(180, 300, 200, 360, 160, 360);
        triangle(200, 280, 220, 360, 180, 360);
        triangle(220, 290, 240, 360, 200, 360);
          triangle(330, 310, 345, 360, 315, 360);
          triangle(350, 290, 365, 360, 335, 360);
          triangle(370, 300, 385, 360, 355, 360);
    triangle(430, 280, 450, 360, 410, 360);
    triangle(450, 260, 470, 360, 430, 360);
    triangle(470, 270, 490, 360, 450, 360);
      triangle(550, 280, 570, 360, 530, 360);
      triangle(570, 260, 590, 360, 550, 360);
      triangle(590, 270, 610, 360, 570, 360);
        triangle(650, 300, 665, 360, 635, 360);
        triangle(675, 280, 695, 360, 655, 360);
        triangle(695, 290, 715, 360, 675, 360);


  push() ;
  translate(x, 0) ;
  avatar() ;
  pop() ;

  x += 10 ;
  if (x > width) {
    x = 0 ;
  }

}



function avatar() {

    noStroke(); //no line around shapes //stroke(255,0,0); //strokeWeight(10);


      //Monsters
      //behind tree tentacle eye
      stroke(110, 20, 130);
      strokeWeight(20);
      noFill();
      arc(150, 250, 80, 120, 0, 90);
      arc(530, 100, 80, 120, 0, -PI);
      //eyes
      noStroke();
      fill(110, 20, 130);
      ellipse(190, 250, 40, 40);
      ellipse(490, 95, 40, 40);
      //white
      fill(230, 220, 180);
      ellipse(190, 250, 30, 30);
      ellipse(490, 95, 30, 30);
      //pupils
      fill(30, 20, 80);
      ellipse(190, 250, 15, 15);
      ellipse(490, 95, 15, 15);
      //shine
      fill(230, 220, 180);
      ellipse(195, 245, 8, 8);
      ellipse(495, 90, 8, 8);

      //grass
      fill(30,80,90);
      rect(0, 360, 720, 140);

      //midground tree
      fill('brown');
      rect(575, 260, 50, 130);

      fill(100,0,0);
      rect(575, 260, 50, 10);
      rect(590, 260, 25, 130);

      fill(20,70,70);
      quad(575, 390, 625, 390, 720, 430, 625, 430);
      quad(550, 430, 720, 430, 720, 500, 650, 500);

      fill(20,70,70);
      triangle(600, 18, 525, 260, 675, 260);
        quad(575, 40, 625, 40, 675, 200, 525, 200);
          quad(575, 0, 625, 0, 670, 140, 530, 140);
            quad(560, 0, 640, 0, 665, 75, 535, 75);

      fill(70,130,160);
        quad(544, 200, 565, 200, 550, 260, 525, 260);
          quad(545, 140, 565, 140, 550, 200, 525, 200);
            quad(550, 70, 570, 70, 550, 140, 530, 140);
              quad(560, 0, 580, 0, 555, 75, 535, 75);

      //foreground tree
      fill('brown');
      rect(81, 151, 80, 250);

      fill(20,70,70);
      quad(80, 400, 160, 400, 120, 500, 0, 500);

      fill(100,0,0);
      rect(81, 151, 80, 25);
      rect(90, 151, 50, 250);

      fill(20,70,70);
      quad(45, 0, 210, 0, 250, 160, 0, 160);

      fill(70,130,160);
      quad(190, 0, 210, 0, 222, 50, 210, 50);
      quad(200, 50, 222, 50, 237, 110, 225, 110);
      quad(215, 110, 237, 110, 250, 160, 235, 160);

      //Monsters
      //front guy
      noStroke();
      fill(10, 50, 70);
      ellipse(600, 440, 200, 200);
      rect(500, 440, 200, 60);
      triangle(520, 330, 560, 360, 520, 390);
      triangle(680, 330, 680, 390, 640, 360);
        fill(10, 25, 45);
        ellipse(600, 440, 150, 150);
        rect(525, 440, 150, 60);
      //white
      fill(230, 220, 180);
      //ellipse(560, 430, 30, 30);
      noStroke();
      arc(560, 430, 50, 25, 0, PI);
      arc(640, 430, 50, 25, 0, PI);
      //pupils
      fill(30, 20, 80);
      arc(560, 430, 30, 15, 0, PI);
      arc(640, 430, 30, 15, 0, PI);
      //shine
      fill(230, 220, 180);
      arc(565, 435, 10, 5, 0, -180);
      arc(645, 435, 10, 5, 0, -180);

      //front claw
      fill(10, 50, 70);
      quad(0, 250, 50, 225, 50, 360, 0, 400);
        triangle(35, 190, 30, 250, 0, 250);
        triangle(50, 225, 150, 270, 50, 270);
        triangle(50, 270, 150, 315, 50, 315);
        triangle(50, 315, 150, 360, 50, 360);
      fill(10, 25, 45);
      triangle(35, 275, 35, 325, 0, 360);

    } else {
    //sky
    background(220, 240, 255);
    fill(190, 210, 225); //color for everything underneath, until it hits another 'fill'
    rect(0, 0, 720, 100);
      fill(200, 220, 235);
      rect(0, 100, 720, 50);
        fill(210, 230, 245);
        rect(0, 150, 720, 40);

    //sun
    fill(255,250,210);
    arc(360, 360, 280, 280, PI, TWO_PI);

    //clouds
    fill(255);
    ellipse(252, 144, 200, 72);
      ellipse(225, 115, 120, 60);
    ellipse(500, 96, 180, 60);
      ellipse(580, 120, 200, 48);

    //mountains light
    fill(210);
    quad(50, 200, 150, 260, 150, 360, 100, 360);
      quad(175, 250, 230, 300, 250, 360, 200, 360);
        quad(265, 265,300, 300, 350, 360, 300, 360);
          quad(350, 285, 430, 300, 430, 360, 400, 360);

         quad(430, 300, 490, 275, 445, 360, 430, 360);
       quad(510, 300, 550, 260, 530, 360, 480, 360);
    quad(600, 300, 675, 200, 650, 360, 600, 360);

    //mountains dark
    fill(160);
    quad(0, 250, 50, 200, 100, 360, 0, 360);
      quad(150, 260, 175, 250, 200, 360, 150, 360);
        quad(230, 300, 265, 265, 300, 360, 250, 360);
          quad(300, 300, 350, 285, 400, 360, 350, 360);
            triangle(430, 315, 460, 360, 375, 360);
         quad(490, 275, 510, 300, 480, 360, 445, 360);
       quad(550, 260, 600, 300, 600, 360, 530, 360);
    quad(675, 200, 720, 250, 720, 360, 650, 360);

    //forest front
    fill(20,100,20);
    triangle(20, 280, 40, 360, 0, 360);
    triangle(40, 260, 60, 360, 20, 360);
    triangle(60, 270, 80, 360, 40, 360);
      triangle(100, 280, 120, 360, 80, 360);
      triangle(120, 260, 140, 360, 100, 360);
      triangle(140, 270, 160, 360, 120, 360);
        triangle(180, 300, 200, 360, 160, 360);
        triangle(200, 280, 220, 360, 180, 360);
        triangle(220, 290, 240, 360, 200, 360);
          triangle(330, 310, 345, 360, 315, 360);
          triangle(350, 290, 365, 360, 335, 360);
          triangle(370, 300, 385, 360, 355, 360);
    triangle(430, 280, 450, 360, 410, 360);
    triangle(450, 260, 470, 360, 430, 360);
    triangle(470, 270, 490, 360, 450, 360);
      triangle(550, 280, 570, 360, 530, 360);
      triangle(570, 260, 590, 360, 550, 360);
      triangle(590, 270, 610, 360, 570, 360);
        triangle(650, 300, 665, 360, 635, 360);
        triangle(675, 280, 695, 360, 655, 360);
        triangle(695, 290, 715, 360, 675, 360);

    //grass
    fill('green');
    rect(0, 360, 720, 140);

    //midground tree
    fill('brown');
    rect(575, 260, 50, 130);

    fill(100,0,0);
    rect(575, 260, 50, 10);
    rect(590, 260, 25, 130);

    fill(20,80,30);
    quad(575, 390, 625, 390, 720, 430, 625, 430);
      quad(550, 430, 720, 430, 720, 500, 650, 500);

    fill(20,80,30);
    triangle(600, 18, 525, 260, 675, 260);
    quad(575, 40, 625, 40, 675, 200, 525, 200);
      quad(575, 0, 625, 0, 670, 140, 530, 140);
        quad(560, 0, 640, 0, 665, 75, 535, 75);

    fill(20,100,60);
    quad(545, 200, 565, 200, 550, 260, 525, 260);
      quad(545, 140, 565, 140, 550, 200, 525, 200);
        quad(550, 70, 570, 70, 550, 140, 530, 140);
          quad(560, 0, 580, 0, 555, 75, 535, 75);

    //foreground tree
    fill('brown');
    rect(81, 151, 80, 250);

    fill(20,80,30);
    quad(80, 400, 160, 400, 120, 500, 0, 500);

    fill(100,0,0);
    rect(81, 151, 80, 25);
    rect(90, 151, 50, 250);

    fill(20,80,30);
    quad(45, 0, 210, 0, 250, 160, 0, 160);

    fill(20,100,60);
    quad(190, 0, 210, 0, 222, 50, 210, 50);
    quad(200, 50, 222, 50, 237, 110, 225, 110);
    quad(215, 110, 237, 110, 250, 160, 235, 160);

    fill('white');
    textSize(14);
    text(mouseX + ", "+ mouseY, 50, 490);

    //text
    fill('white');
    noStroke();

    text("This is Sep.\nHe's a goblin. \nHe's a goblin that \nlives in a forest full \nof scary monsters. \nDon't believe me? \nClick then ... if you dare!", 120, 30);

  }//else function

  //Sep
    //body
    fill(220, 220, 200);
    rect(width/2 - 33, height/2 + 35, 65, 105);
      //pants
      fill(100,80,60);
      rect(width/2 - 33, height/2 + 140, 65, 25);
        rect(width/2 - 33, height/2 + 140, 20, 85);
        rect(width/2 + 13, height/2 + 140, 20, 85);
        //feet
        noStroke();
        fill(150, 200, 100);
        triangle(327, 475, 347, 475, 320, 490);
        triangle(374, 475, 394, 475, 400, 490);
        //arm
        stroke(220, 220, 200);
        strokeWeight(15);
        noFill();
        arc(325, 350, 40, 120, 90, -HALF_PI);
        arc(390, 350, 40, 120, -HALF_PI, 45);
        //hands
        noStroke();
        fill(150, 200, 100);
        ellipse(310, 388, 25, 25);
        ellipse(407, 388, 25, 25);
    //head
    fill(150, 200, 100);
      //ears
      stroke(130, 180, 80);
        strokeWeight(4);
      triangle(250, 220, 300, 225, 290, 260);
      triangle(415, 225, 465, 220, 430, 260);
      noStroke();
      fill(180, 180, 80);
      triangle(260, 226, 290, 245, 290, 260);
      triangle(415, 255, 458, 225, 430, 260);
    //face
    noStroke();
    fill(200, 200, 180);
    ellipse(width/2, height/2 +30, 85, 35);
    fill(130, 180, 80);
    ellipse(width/2, height/2, 150, 85);
    fill(150, 200, 100);
    ellipse(width/2, height/2, 150, 75);
      //nose
      noStroke();
      fill(180, 180, 80);
      quad(360, 240, 385, 260, 360, 266, 335, 260);
      //eyes
      fill('black');
      noStroke();
      ellipse(width/2 - 35, height/2, 5, 12);
      ellipse(width/2 + 35, height/2, 5, 12);
      //mouth
      stroke(120, 170, 70);
      strokeWeight(3);
      noFill();
      arc(370, 270, 50, 20, 0, 40);

      // if (mouseIsPressed) {
      //   sound1.play(1);
      // }else{
      //   sound1.pause();
      // }
}



function mouseReleased() {
if (sound1.isPlaying()) {
  sound1.pause();
}else{
  sound1.play();
}
}


function mouseReleased() {
  print(mouseX + ", "+ mouseY);
}

// add these to programs that use sound, at the bottom
function touchStarted() {
  getAudioContext().resume();
}
