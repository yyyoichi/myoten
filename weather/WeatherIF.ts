import FormatDate from "../logic/FormatDate"
import { CodeAdapter } from "./adapter/CodeAdapter"

export type AboutJPWeather = "晴" | "曇" | "雨" | "雪" | "霧"
export const aboutJPWeathers: AboutJPWeather[] = ["晴", "曇", "雨", "雪", "霧"]
export type WeatherKey = {
    date: FormatDate
    tmp2max: number,
    tmp2min: number,
    wcode: CodeAdapter
}