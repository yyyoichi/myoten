export type AboutJPWeather = "晴" | "曇" | "雨" | "雪" | "霧"
export interface CodeAdp {
    // code: number | string;
    // aboutJPWeather: AboutJPWeather[];
    getAboutJPWeather: () => AboutJPWeather[];
}

export default abstract class CodeAdapter {
    protected aboutJPWeather: AboutJPWeather[] = []
    public getAboutJPWeather(): AboutJPWeather[] {
        if (this.aboutJPWeather.length > 0) {
            return this.aboutJPWeather
        }
        this.aboutJPWeather = this._getAboutJPWeather()
        return this.aboutJPWeather
    }
    protected abstract _getAboutJPWeather(): AboutJPWeather[];
}