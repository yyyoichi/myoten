import WeekWeather from "./WeekWeather";
import FormatDate from "../../lib/FormatDate";
import JamCodeAdp from "../adapter/JamCodeAdp";
import { WeatherKey } from "../WeatherIF";

export default class JamWW extends WeekWeather {
    constructor(json = null) {
        super();
        if (!json) return;
        const tss = json[1]["timeSeries"];
        const weatherCodes: string[] = tss[0]["areas"][0]["weatherCodes"];
        const tmpsMax: number[] = tss[1]["areas"][0]["tempsMax"];
        const tempsMin: number[] = tss[1]["areas"][0]["tempsMin"];
        const dates: string[] = tss[1]["timeDefines"];
        const weather = weatherCodes.reduce((ws: WeatherKey[], c: string, i: number) => {
            const w = {
                date: new FormatDate(dates[i]),
                tmp2max: tmpsMax[i],
                tmp2min: tempsMin[i],
                wcode: new JamCodeAdp(c)
            }
            return [...ws, w]
        }, [])
        this.setWeather(weather)
    }
}