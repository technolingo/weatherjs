export class WeatherData {
  constructor (location, description) {
    this.location = location;
    this.description = description;
    this.temperature = '';
  }
}

export const WEATHER_PROXY_HANDLER = {
  get: function (target, property) {
    return Reflect.get(target, property);
  },
  set: function (target, property, value) {
    const celsiusValue = ((value - 32) * 5 / 9).toFixed(2) + ' °C';
    return Reflect.set(target, property, celsiusValue);
  }
}