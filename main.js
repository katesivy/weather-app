function getWeather(zip) {
    // var key = '{97c1709133fbc864e7d9571b665abe73}';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=40502,&appid=97c1709133fbc864e7d9571b665abe73')
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      console.log(data);
    Populate(data);
    })
    .catch(function() {
      
    });
  }
  
  window.onload = function() {
    getWeather ( 40502 );
  }

  function Populate( d ) {
    let farenheit =  Math.round((d.main.temp * (9 / 5) - 459.67));
    let celcius = Math.round(d.main.temp - 273.15);
    document.getElementById('today').innerHTML =d.main.temp + " K";
    document.getElementById('farenheit').innerHTML =farenheit + " F";
    document.getElementById('celcius').innerHTML =celcius + " C";

    document.getElementById('location').innerHTML =d.name;
    document.getElementById('condition').innerHTML = d.weather.main;

    let feelsFaranheit = Math.round((d.main.feels_like * (9/5) - 459.67));
    document.getElementById('feels').innerHTML =feelsFaranheit;

  }
 