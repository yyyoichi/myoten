import FormatDate from "../logic/FormatDate"

export type WeatherIndex = {
    date: FormatDate
    tmp2max: number,
    tmp2min: number,
    wcode: number | string
}

export type AboutWeather = "clear_p_cloudy" | "clear" | "cloudy" | "rain" | "snow" | "fog" | "showers" | "other"
export type AboutJPWeather = "晴れ一時曇り" | "晴れ" | "曇り" | "雨" | "雪" | "霧" | "不安定な天気" | "その他"