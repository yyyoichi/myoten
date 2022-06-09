import { useCallback, useEffect, useState } from "react";
import createTypeContext from "../lib/createTypeContext";
import DayWeather from "./day/DayWeather";
import JamWW from "./week/JamWW";
import WeekWeather from "./week/WeekWeather";

export type UseWeatherContext = {
    weather: DayWeather;
    setDayAfter: (n: number) => void;
    changePlace: (p: string) => void;
}
export const [useWeather, WeatherProvider] = createTypeContext<UseWeatherContext>()

export function useWeatherContext():UseWeatherContext {
    const [wth, setW] = useState<WeekWeather>(new JamWW(null));
    const [after, setAfter] = useState<number>(1);
    const [place, setPlace] = useState<string>("tokyo")
    useEffect(() => {
        console.log("fetch")
        const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
        fetch(url).then(async (res) => {
            const json = await res.json();
            const data = new JamWW(json)
            setW(data);
        })
    }, [place])
    const weather = wth.getDay(after)
    const setDayAfter = (n: number) => {
        setAfter(n);
    }
    const changePlace = (p: string) => {
        setPlace(p);
    }
    return {
        weather,
        setDayAfter,
        changePlace
    }
}