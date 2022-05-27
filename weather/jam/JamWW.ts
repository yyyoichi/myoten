import WeekWeather from "../week/WeekWeather";
import { WeatherIndex } from "../WeatherIndex"
import FormatDate from "../../logic/FormatDate";

export default class JamWW extends WeekWeather {
    constructor(json = null) {
        super();
        if (!json) return;
        const tss = json[1]["timeSeries"];
        const weatherCodes: string[] = tss[0]["areas"][0]["weatherCodes"];
        const tmpsMax: number[] = tss[1]["areas"][0]["tempsMax"];
        const tempsMin: number[] = tss[1]["areas"][0]["tempsMin"];
        const dates: string[] = tss[1]["timeDefines"];
        console.log(weatherCodes)
        console.log(tmpsMax)
        console.log(tempsMin)
        console.log(dates)
        const weather = weatherCodes.reduce((ws: WeatherIndex[], c: string, i: number) => {
            const w = {
                date: new FormatDate(dates[i]),
                tmp2max: tmpsMax[i],
                tmp2min: tempsMin[i],
                wcode: c
            }
            return [...ws, w]
        }, [])
        console.log(weather)
        this.setWeather(weather)
    }
}