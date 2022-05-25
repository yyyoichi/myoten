import FormatDate from "../logic/FormatDate"
import DayWeather from "./DayWeather";
import { WeatherIndex } from "./WeatherIndex";

export default class WeekWeather {
    private weather: Array<WeatherIndex> = [];
    constructor(json = null) {
        if (!json) return;
        const d = json["daily"];
        const times = d["time"] as string[]
        this.weather = times.reduce((ws: WeatherIndex[], time: string, i: number) => {
            const date = new FormatDate(time);
            const tmp2max: number = d["temperature_2m_max"][i];
            const tmp2min: number = d["temperature_2m_min"][i];
            const wcode: number = d["weathercode"][i];
            return [...ws, { date, tmp2max, tmp2min, wcode }]
        }, []);
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