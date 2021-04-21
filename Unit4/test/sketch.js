var url = "https://spreadsheets.google.com/feeds/list/1qwbpwuHScQcujaMEg434eWPmpChMGBzaRQ9n39tYBjE/od6/public/values?alt=json";
var dudes = [];
function setup() {
createCanvas(windowWidth, windowHeight);
  // Request the data from openweathermap
  loadJSON(url, gotSpreadsheet);
}

function draw() {
  background(0);
  var padding = width/dudes.length;
  for (var i = 0; i < dudes.length; i++) {
    fill(255,0,0);
    ellipse(i * padding, height/2, dudes[i].age, dudes[i].age);
    textSize(20);
    noStroke();
    fill(255);
    textAlign(LEFT, CENTER);
    text(dudes[i].name,(i * padding),height/2);
  }
}

function gotSpreadsheet(people) {
  //Position 0 is the first item in the list
  //each one is 3 hours apart
  for (var i = 0; i < people.feed.entry.length; i++) {
    var dude = {
                  "name": people.feed.entry[i].gsx$name.$t,
                  "age": people.feed.entry[i].gsx$age.$t,
                  "weight": people.feed.entry[i].gsx$weight.$t
              }
    dudes.push(dude);
  }

}
