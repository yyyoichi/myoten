import { WeatherKey } from "../week/WeekWeather";

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
        return this.weather["date"].getRormatDate();
    }
    getWeather() {
    }
    getAboutWeather() {
    }
    getAboutJPWeather() {
        this.weather["wcode"].getAboutJPWeather();
    }
}