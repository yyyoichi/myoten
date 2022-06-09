import React, { ReactNode, useCallback } from "react";
import { useEffect, useState } from "react";
import DayWeather from "./day/MeteoDW";
import JamWW from "./week/JamWW";
import WeekWeather from "./week/WeekWeather";
// const useWeather = React.useCallback(uw, [])
type WeatherContext = readonly [DayWeather, {
    readonly setDayAfter: (n: number) => void;
    readonly changePlace: (p: string) => void;
}]
function createCtx<ContextType>() {
    const ctx = React.createContext<ContextType | undefined>(undefined);
    function useCtx() {
        const c = React.useContext(ctx);
        if (!c) throw new Error("useCtx must be inside a Provider with a value");
        return c;
    }
    return [useCtx, ctx.Provider] as const;
}
const [useWeahter, SetWeatherProvider] = createCtx<WeatherContext>();
export default useWeahter
export function WeatherProvider({ children }: { children: ReactNode }) {
    const weather = uw();
    return (
        <SetWeatherProvider value={weather}>
            {children}
        </SetWeatherProvider>
    )
}
export function uw():WeatherContext {
    console.log("useWeather")
    const [after, setAfter] = useState<number>(1);
    const [place, setPlace] = useState<string>("tokyo")
    const [wth, setW] = useState<WeekWeather>(new JamWW(null));
    useEffect(() => {
        console.log("effect")
        const url = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";
        fetch(url).then(async (res) => {
            const json = await res.json();
            const data = new JamWW(json)
            setW(data);
        })
    }, [])
    const weather = wth.getDay(after)
    const setDayAfter = useCallback((n: number) => {
        setAfter(n);
    }, [])
    const changePlace = useCallback((p: string) => {
        setPlace(p);
    }, [])
    return [
        weather, {
            setDayAfter,
            changePlace
        }
    ] as const
}