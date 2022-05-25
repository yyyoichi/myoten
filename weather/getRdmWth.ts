import shuffleArray from "../logic/shuffleArray";
import ExtendsArray from "../logic/shuffleArray";
import DayWeather from "./DayWeather";
import { AboutJPWeather } from "./WeatherIndex";

export default function getRdmWth(now: AboutJPWeather, num = 4) {
    let weathers: AboutJPWeather[] = [];
    for (const [key, val] of Object.entries(DayWeather.weatherMap)) {
        const value = val as AboutJPWeather;
        weathers.push(value)
    }
    const length = weathers.length
    if (num > length) {
        console.error("Paramator 'num' is bigger than JPWeathers.");
        return weathers.splice(0, num);
    }
    weathers = shuffleArray(weathers)
    weathers = weathers.splice(0, num)
    if (!weathers.includes(now)) {
        weathers.splice(0, 1, now);
        return shuffleArray(weathers)
    } else {
        return weathers
    }
}