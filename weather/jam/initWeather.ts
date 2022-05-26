import { createContext, useEffect, useState } from "react";
import WeekWeather from "../WeekWeather";

export default function initWeather() {
    const [wth, setW] = useState<WeekWeather>(new WeekWeather(null));
    useEffect(() => {
        const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
        fetch(url).then(async (res) => {
            const json = await res.json();
            // const data = new WeekWeather(json);
            // setW(data);
        })
    }, [])
    const getDayWeatherAt = (at: number) => {
        return wth.getDay(at)
    }
    return {
        wth,
        getDayWeatherAt,
        WeatherContext: createContext < WeekWeather > (wth)
    }
}