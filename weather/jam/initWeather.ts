import { createContext, useEffect, useState } from "react";
import WeekWeather from "../WeekWeather";

export default function initWeather() {
    const [wth, setW] = useState<WeekWeather>(new WeekWeather(null));
    const [place, setPlace] = useState<string>("tokyo")
    useEffect(() => {
        const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
        fetch(url).then(async (res) => {
            const json = await res.json();
            // const data = new WeekWeather(json);
            // setW(data);
        })
    }, [place])
    const changePlace = (p: string) => {
        setPlace(p);
    }
    return {
        wth,
        WeatherContext: createContext < WeekWeather > (wth)
    }
}