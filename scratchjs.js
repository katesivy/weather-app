
// let requestURL = api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={97c1709133fbc864e7d9571b665abe73y}
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     const varName = request.response;
//     populatePlace(varName);
//     showContent(varName);
// //   }


//   function populateHeader(jsonObj) {
//   const myH1 = document.createElement('h1');
//   myH1.textContent = jsonObj['squadName'];
//   header.appendChild(myH1);

//   const myPara = document.createElement('p');
//   myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//   header.appendChild(myPara);
// }
// const errorMsg = document.getElementById('error2');
// button.addEventListener('click', function());

let requestURL = 'http://openweathermap.org/img/wn/10d@2x.png';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    document.getElementById('display').innerHTML;
};
function Icon() {
    let Sunny = 
        switch () {
        case Sunny:
            return "Sunny: " + d.weather.icon;
            break;
        case Rainy:
            return "Rainy: " + d.weather.icon;

            function errorMessage(zip) {
                var text = "Invalid zip code";
                if (isNaN(zip) || zip.length != 5) {
                    document.getElementById("alert").innerHTML = text;
                } 