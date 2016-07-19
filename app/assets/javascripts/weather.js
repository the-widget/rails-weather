$('.fetchWeather').submit(function(event) {
  event.preventDefault();
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast?q=Hawaii,us&APPID=94badd64d670682ddf96dfc942e3575a", function(data) {
      console.log(data);
    })
     .done(function(){
      alert("done")
     })
     
});


