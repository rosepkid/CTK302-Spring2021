let capo;
let knit;
let ramones;

function setup() {
  createCanvas(800, 800);
  capo = loadImage("assets/capoeira.jpeg");
  knit = loadImage("assets/knitting.jpg");
  ramones = loadImage("assets/ramones.jpg");

  imageMode(CENTER) ;
  rectMode(CENTER) ;
  textAlign(CENTER) ;
}

function draw() {
  background('white');
  image(capo, width/2, height/2, 200, 200) ;
  image(knit, width/2, height/2 - 220, 200, 200) ;
  image(ramones, width/2, height/2 + 220, 200, 200) ;

}
