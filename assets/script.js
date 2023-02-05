let ApiKey = "280e5f0f4568991215750e1123562464";
let cityModel = document.querySelector("#city-model");
let cityInput = document.querySelector("#city-input");
let cityNameEl = document.querySelector("#city-name");
let city;
let iconWeather;
let temperatureEl = document.querySelector("#temperature");
let windEl = document.querySelector("#wind");
let humidityEl = document.querySelector("#humidity");
let uvIndexEl = document.querySelector("#uv-index");
let dailyWeatherEl = document.querySelector("#daily-weather");
// const cityArray;
let today = dayjs();
$("#current-date").text("(" + today.format("MMM D, YYYY") + ")");

function getWeather() {
  let apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    ApiKey;

  fetch(apiURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        fahrenheit = Math.round(
          (parseFloat(data.main.temp) - 273.15) * 1.8 + 32
        );
        cityNameEl = data.name;
        temperatureEl = "Temp: " + fahrenheit + "F";
        windEl = "Wind: " + data.wind.speed + " mph";
        humidityEl = "Humidity: " + data.main.humidity + "%";
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
  let forecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    ApiKey;
  const startDate = dayjs();
  const endDate = dayjs() + 4;
  while (startDate <= endDate) {}
}
