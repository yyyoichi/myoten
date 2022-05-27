import FormatDate from "../../logic/FormatDate";
import { WeatherIndex } from "../WeatherIndex";
import WeekWeather from "../week/WeekWeather";

export default class MeteoWW {
    constructor(json = null) {
        if (!json) return;
        const d = json["daily"];
        const times = d["time"] as string[]
        const weather = times.reduce((ws: WeatherIndex[], time: string, i: number) => {
            const date = new FormatDate(time);
            const tmp2max: number = d["temperature_2m_max"][i];
            const tmp2min: number = d["temperature_2m_min"][i];
            const wcode: number = d["weathercode"][i];
            return [...ws, { date, tmp2max, tmp2min, wcode }]
        }, []);
        // this.setWeather(weather)
    }
}