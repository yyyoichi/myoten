import FormatDate from "../../logic/FormatDate"
import DayWeather from "../DayWeather";
import { WeatherIndex } from "../WeatherIndex";

export default abstract class WeekWeather {
    private weather: Array<WeatherIndex> = [];
    protected getWeather() {
        return this.weather
    }
    protected setWeather(weather: WeatherIndex[]) {
        this.weather = weather        
    }
    hasData() {
        return this.weather.length !== 0;
    }
    private _getEmpty() {
        let d = {
            date: new FormatDate(""),
            tmp2max: 0,
            tmp2min: 0,
            wcode: 0
        }
        return new DayWeather(d, true);
    }
    getDay(after: number) {
        if(!this.hasData()) return this._getEmpty()
        return new DayWeather(this.weather[after])
    }
    getToday() {
        return this.getDay(0);
    }
    getTomorrow() {
        return this.getDay(1);
    }

}