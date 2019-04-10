export default class WeatherService {
    static getWeatherForecast(jsDateObj, callback) {
        fetch(`/weather/${jsDateObj.getFullYear()}/${jsDateObj.getMonth()+1}/${jsDateObj.getDate()}`)
        .then(res => res.json())
        .then((data) => {
            callback(null, data);
        });
    }
}