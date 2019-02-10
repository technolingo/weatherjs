import * as ELEMENTS from 'elements.js';
import * as APIDETAILS from 'api-details.js';
import { WeatherAPIClient } from 'api-client.js';
import { WeatherData, WEATHER_PROXY_HANDLER } from 'weather.js';

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
  // get all temperatures in Fahrenheit and convert them into Celsius later
  const URL = APIDETAILS.APIURL + cityName + '&units=imperial&appid=' + APIDETAILS.APIKEY;
  WeatherAPIClient.fetchData(URL)
    .then(data => {
      console.log(data);
      console.log(data.weather[0].description);
      const WEATHER_DATA = new WeatherData(data.name, data.weather[0].description.toUpperCase());
      const WEATHER_DATA_PROXY = new Proxy(WEATHER_DATA, WEATHER_PROXY_HANDLER);
      // set temperature, will be automatically converted to Celsius by the proxy trap
      WEATHER_DATA_PROXY.temperature = data.main.temp;
    })
    .catch(error => {
      alert(error);
    });
}