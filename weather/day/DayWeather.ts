import { WeatherKey } from "../WeatherIF";

export default class DayWeather {
    constructor(private weather: WeatherKey, private empty: boolean = false) {
    }
    isEmply() {
        return this.empty;
    }
    getTmp2Max() {
        return this.weather["tmp2max"];
    }
    getTmp2Min() {
        return this.weather["tmp2min"];
    }
    getDate() {
        if (!this.weather["date"]) return null;
        return this.weather["date"].getFormatDate();
    }
    getWeather() {
    }
    getAboutWeather() {
    }
    getDetailWeather() {
        return this.weather["wcode"].getDetailWeather()
    }
    getAboutJPWeather() {
        return this.weather["wcode"].getAboutJPWeather();
    }
}