function getWeather(zip) {
    // var key = '{97c1709133fbc864e7d9571b665abe73}';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=40502,&appid=97c1709133fbc864e7d9571b665abe73')
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
        })
        .catch(function () {
        });
}

window.onload = function () {
    getWeather(40502);
}
