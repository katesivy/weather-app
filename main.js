var zip = document.getElementById("zip");
const button = document.getElementById('submit');
// const errorMsg = document.getElementById('error2');

function getWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip.value + "&appid=97c1709133fbc864e7d9571b665abe73")
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            Populate(data);
        })
        
        .catch(e) 
        
       
}




button.addEventListener('click', getWeather);

function Populate(d) {
    if (d.cod == 200) {
    
    document.getElementById('location').innerHTML = d.name;
    let farenheit = Math.round((d.main.temp * (9 / 5) - 459.67));
    let celcius = Math.round(d.main.temp - 273.15);
    document.getElementById('today').innerHTML = d.main.temp + " K°";
    document.getElementById('farenheit').innerHTML = farenheit + " F°";
    document.getElementById('celcius').innerHTML = celcius + " C°";
    document.getElementById('condition').innerHTML = d.weather[0].main;
    let feelsFaranheit = Math.round((d.main.feels_like * (9 / 5) - 459.67));
    document.getElementById('feels').innerHTML = feelsFaranheit;

    document.getElementById('display').setAttribute("src", "http://openweathermap.org/img/wn/" + d.weather[0].icon + "@2x.png");
} else {
    alert("NOT A VALID ZIP CODE. " + d.message);

}
}


