import * as ELEMENTS from 'elements.js';
import * as APIDETAILS from 'api-details.js';
import { WeatherAPIClient } from 'weather.js';

ELEMENTS.SEARCH_BUTTON.addEventListener('click', getWeather);
ELEMENTS.SEARCH_INPUT.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather();
  }
});

function getWeather () {
  const cityName = ELEMENTS.SEARCH_INPUT.value.trim();
  if (cityName.length === 0) {
    alert('Please enter a city name!');
  }
  // get weather data
  const URL = APIDETAILS.APIURL + cityName + '&unit=metric&appid=' + APIDETAILS.APIKEY;
  WeatherAPIClient.fetchData(URL)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      alert(error);
    });
}