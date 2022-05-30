import { useEffect, useState } from "react";
import JamWW from "../weather/week/JamWW";
import WeekWeather from "../weather/week/WeekWeather";

export default function useWeather() {
    const [wth, setW] = useState<WeekWeather>(new JamWW(null));
    const [after, setAfter] = useState<number>(1);
    const [place, setPlace] = useState<string>("tokyo")
    useEffect(() => {
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