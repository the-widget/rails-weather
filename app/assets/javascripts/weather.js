var API_KEY = '94badd64d670682ddf96dfc942e3575a'
var BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast'

$('.fetchWeather').submit(function(event) {
  event.preventDefault();
    var city = $('input').val()
    $.getJSON(BASE_URL + "?q=" + city + ",us" + "&APPID=" + API_KEY, function(data) {
      console.log(data.list)
      parse(data.list)
      $('.response').append("<h2>Humidity</h2>")
      humidity.forEach(function(item, index) {
        $('.response').append("<li>" + item + "</li>");
      });
      
    })
     .done(function(){
      alert("done")
     })
     
});
var humidity = [];
var temperature = [];
var pressure = []
parse = function(weatherArray) {
  
  weatherArray.forEach(function(obj){
    humidity.push(obj.main.humidity);
    temperature.push(obj.main.temp);
    pressure.push(obj.main.pressure);
  })
  console.log(humidity)
  console.log(temperature)
  console.log(pressure)
}




// console.log(data.list[0]['main']['humidity'])