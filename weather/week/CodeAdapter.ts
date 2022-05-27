export type AboutJPWeather = "晴" | "曇" | "雨" | "雪" | "霧"
export default interface CodeAdapter {
    code: number | string;
    aboutJPWeather: AboutJPWeather[];
    _getAboutJPWeather: () => AboutJPWeather[];
}