import FormatDate from "../../logic/FormatDate"
import JamCodeAdp from "../adapter/JamCodeAdp";
import { CodeAdapter } from "../adapter/CodeAdapter";
import DayWeather from "../day/DayWeather";

export type WeatherKey = {
    date: FormatDate
    tmp2max: number,
    tmp2min: number,
    wcode: CodeAdapter
}

export default abstract class WeekWeather {
    private weather: Array<WeatherKey> = [];
    protected getWeather() {
        return this.weather
    }
    protected setWeather(weather: WeatherKey[]) {
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
            wcode: new JamCodeAdp("")
        }
        return new DayWeather(d, true);
    }
    getDay(after: number) {
        if (!this.hasData()) return this._getEmpty()
        return new DayWeather(this.weather[after])
    }
    getToday() {
        return this.getDay(0);
    }
    getTomorrow() {
        return this.getDay(1);
    }

}