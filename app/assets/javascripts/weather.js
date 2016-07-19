var API_KEY = '94badd64d670682ddf96dfc942e3575a'
var BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'
var QUERY = "?q=Hawaii,us&"

$('.fetchWeather').submit(function(event) {
  event.preventDefault();
    $.getJSON(BASE_URL + QUERY + "&APPID=" + API_KEY, function(data) {
      console.log(data.list)
      parse(data.list)
      $('.response').html(data.list[0]['main']['humidity']);
    })
     .done(function(){
      alert("done")
     })
     
});

parse = function(weatherArray) {
  var humidity = [];
  weatherArray.forEach(function(obj){
    humidity.push(obj.main.humidity);
  })
  console.log(humidity)
}




// console.log(data.list[0]['main']['humidity'])