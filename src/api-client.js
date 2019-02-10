export class WeatherAPIClient {
  static fetchData (url) {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();
      HTTP.open('get', url);
      HTTP.onreadystatechange = () => {
        if (HTTP.readyState === XMLHttpRequest.DONE && HTTP.status === 200) {
          const DATA = JSON.parse(HTTP.responseText);
          resolve(DATA);
        } else if (HTTP.readyState === XMLHttpRequest.DONE) {
          reject('Something went wrong.');
        }
      };
      HTTP.send();
    }); // return
  } // fecthData
}