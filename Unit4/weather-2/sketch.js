// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temp = 0;
var h = 0;
var desc;


function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Champaign,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=ecb96c6f2772adc0320aaa567d9006dc'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temp = weather.main.temp;
  h = weather.main.humidity;
  desc = weather.weather[0].description;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("temperature is " + temp, 20, 60);
      text("humidity is " + h, 20, 80);
      text("description is " + desc, 20, 100);

      // cloud
      fill('white');
      noStroke();
      ellipse(x+30, 200, 200, 120);
      ellipse(x, 300, 200, 100);

      // thermometer
      fill('red') ;

      var t = map(temp, -10, 100, 0, height-10) ;
      rect(width-50, height-10, 30, -t) ;

      // move the cloud's x position
      x = x + windspeed / 4;
      if (x > width) x = 0;

      break;

  }
}
