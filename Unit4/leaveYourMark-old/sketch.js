var bubbles = [];
var fire;
var water;
var earth;
var air;
var avengerslogo;
var Mark;
var Dots;
let places = [];
let lat = 0;
let long = 0;
let num = 0;
let myLocation = 'loading place';

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  intervalCurrentPosition(positionPing, 5000);

  pushPlaces();

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  // let url = '1-bKu2MweC4duGRTLNsv6kbvKors5x868IS8UeUTtnSk'; // this is KEY of the URL from the sheet
  let url = '1ZbfKqOaJuVfgBeo2z_qvbTsQ6-Fe7vv-Q0cmeKz9Yr4'; // this is KEY of the URL from the sheet
  // https://docs.google.com/spreadsheets/d/1-bKu2MweC4duGRTLNsv6kbvKors5x868IS8UeUTtnSk/edit?usp=sharing

// here's the form  https://docs.google.com/forms/d/e/1FAIpQLSe-c-Pp1Y2444z0ogAxlUVwf-ZrOtpZa3yJxZVVKcTbmKmQ3Q/viewform

  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  Mark = loadImage("assets/YourMarkBk.png");
  // Dots = loadImage("assets/Dots.png");
  imageMode(CENTER);
  f1 = loadFont("assets/VerlagBold.otf");
  textSize(24);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);


}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Major, data[i].Quote, data[i].Hint)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('#d41f2d');
  // image(Dots, width / 2, height / 2);
  image(Mark, width / 2, height / 2);
  // image(avengerslogo, width/2, height/2, 900, 900);

  textAlign(CENTER);

  // // iterate through the bubbles and display the objects if their places match myPlace!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }


  textAlign(LEFT);
  text("lat: " + lat, 10, 340);
  text("long: " + long, 10, 360);
  text("number of updates: " + num, 10, 380);
  text("place: " + myLocation, 10, 400);
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  //  text("lat: " + position.latitude.toFixed(8), 10, 340);
  lat = position.latitude.toFixed(8);
  //  text("long: " + position.longitude.toFixed(8), 10, 390);
  long = position.longitude.toFixed(8);
  //  text("number of updates: " + num, 10, 440);
  //  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true) {
      //  places[i].display();
      myLocation = places[i].desc;
      break; //should break out of the for loop?
      //text(places[i].desc + ' check1 ' + places[i].fence.insideFence, 10, 240 + (i * 28));
    }
  }

}

// my Bubble class
class Bubble {

  constructor(myName, myMajor, myQuote, myHint) {
    this.name = myName.replace(/'/g,'');
    this.major = myMajor.replace(/'/g,'');
    this.quote = myQuote.replace(/'/g,'');

   this.place = myHint.replace(/'/g,'');  // this strips the apostrophes out!
  //    this.place = myHint.replace(/'/g,"\\'");  // this puts a backslash in front of apostrophes
    this.pos = createVector(width/2, height);
    this.vel = createVector(0, -5);
  }


  display() {
    // if (this.shape == "Square") {
    //   rect(this.pos.x, this.pos.y, 50, 50);
    // } else {
    //   ellipse(this.pos.x, this.pos.y, 50, 50);
    // }

    // if(this.element == 'Fire') image(fire, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Water') image(water, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Earth') image(earth, this.pos.x, this.pos.y, 100, 100);
    // if(this.element == 'Air') image(air, this.pos.x, this.pos.y, 100, 100);

    //rect(this.pos.x, this.pos.y, 100, 100);

    if (myLocation == this.place) {
      fill('white');
    } else {
      fill('grey');
    }

    textFont(f1);

    text(this.name, this.pos.x, this.pos.y - 25);
    text(this.major, this.pos.x, this.pos.y);
    text(this.quote, this.pos.x, this.pos.y + 25);
    text(this.place, this.pos.x, this.pos.y + 50);


  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

}



function pushPlaces() {
  places.push(new Place(40.47859881213726, -88.96815846900026, "Roses House", .02)); // new Place object, for CVA room 17

  places.push(new Place(40.50622797365503, -88.99051350503431, "CVA 17", .02)); // new Place object, for CVA room 17
  places.push(new Place(40.50715473783438, -88.99173550368103, "COB", .02)); // new Place object, for COB.... JUST SWITCHED TO NEW COORDINATES
  places.push(new Place(40.510824736433904, -88.99134151266699, "ISU College Bridge", .02)); // new Place object, for ISU bridge over College Ave

  places.push(new Place(40.50863221414712, -88.99077591254148, "Old Union", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50840289459472, -88.9909118880512, "Williams Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50844449497366, -88.9911676488728, "Cent 4 Perf Arts", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50750741811689, -88.99029850463533, "CVA Circle", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.5079598008354, -88.99148671475066, "McCormick Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50864821960959, -88.99120123764614, "Fell Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50896516728555, -88.99212919431163, "DeGarmo Hall Solar", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50917235949953, -88.99177097641105, "Cook Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50947612369081, -88.99174125561485, "Edwards Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50980921328644, -88.99149564020013, "Schroeder Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51014656358694, -88.9912748009074, "Felmley Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50942119788225, -88.99076697407767, "Moulton Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50930542714758, -88.99068753755874, "Hovey Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.508730456808415, -88.98572041960726, "University Galleries", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.511676506705506, -88.9938474159579, "Student Services Building", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.51039740494815, -88.9996815241351, "Nelson Smith", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.512969573012896, -88.99488587696477, "Hancock Stadium", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.509699669963155, -88.99664232253424, "Turner Hall", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.512242304908746, -88.99975734818341, "Tri Towers (Haynie)", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.50946288329222, -88.98459824742137, "Uptown Circle", .02)); // new Place object, for ISU bridge over College Ave
  places.push(new Place(40.47137301266825, -88.94350239220492, "Check Location", .02)); // new Place object, for ISU bridge over College Ave

}

class Place {
  constructor(lat, long, desc, radius) {
    this.lat = lat;
    this.long = long;
    this.fence = false;
    this.desc = desc;
    this.radius = radius;
    this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates
  }


  display() {
    //    image(reggieImg, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 100, 400);
  }
}
