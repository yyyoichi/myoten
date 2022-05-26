import getRdmWth from "./getRdmWth";
import getRandomWeather from "./getRdmWth";
import { AboutJPWeather, AboutWeather, WeatherIndex } from "./WeatherIndex";



export default class DayWeather {
    static weatherMap: { [key in AboutWeather]: AboutJPWeather } = {
        clear_p_cloudy: "晴れ一時曇り",
        clear: "晴れ",
        cloudy: "曇り",
        rain: "雨",
        snow: "雪",
        fog: "霧",
        showers: "不安定な天気",
        other: "その他"
    };
    static aboutWeatherList: AboutWeather[] = ["clear_p_cloudy", "clear", "cloudy", "rain", "snow", "fog", "showers"]
    private randomWeather: AboutJPWeather[] = ["晴れ一時曇り", "晴れ", "曇り", "雨", "雪", "霧", "不安定な天気"]
    constructor(private wIndex: WeatherIndex, private empty: boolean = false) {
    }
    getRandomWeather() {
        if(!this.isEmply) return []
        if(this.randomWeather.length !== 0) return this.randomWeather
        this.randomWeather = getRdmWth(this.getAboutJPWeather(), 4);
        return this.randomWeather;
    }
    isEmply() {
        return this.empty;
    }
    getTmp2Max() {
        return this.wIndex["tmp2max"];
    }
    getTmp2Min() {
        return this.wIndex["tmp2min"];
    }
    getDate() {
        if (!this.wIndex["date"]) return null;
        return this.wIndex["date"].getRormatDate();
    }
    getWeather() {
        const n = this.wIndex["wcode"]
        if (n === 0) {
            return "clear";
        } else if (n === 1) {
            return "mainlyClear";
        } else if (n === 2) {
            return "clear-p-cloudy";
        } else if (n === 3) {
            return "cloudy";
        } else if ([45, 48].includes(n)) {
            return "fog";//霧
        } else if ([51, 53, 55].includes(n)) {
            return "drizzle";//霧雨
        } else if ([56, 57].includes(n)) {
            return "freezingDrizzle";//雨氷
        } else if ([61, 63, 65].includes(n)) {
            return "rain";
        } else if ([66, 67].includes(n)) {
            return "freezingRain";//雨氷？
        } else if ([71, 73, 75].includes(n)) {
            return "snow";
        } else if ([77].includes(n)) {
            return "snowGrains";//霧雪
        } else if ([80, 81, 82].includes(n)) {
            return "rainsShowers";//にわか雨
        } else if ([85, 86].includes(n)) {
            return "snowShowers";//にわか雪
        } else {
            return "other";
        }
    }
    getAboutWeather(): AboutWeather {
        const n = this.wIndex["wcode"]
        if ([0, 1].includes(n)) {
            return 'clear';
        } else if (n === 2) {
            return "clear_p_cloudy";
        } else if (n === 3) {
            return "cloudy";
        } else if (60 <= n && n < 70) {
            return "rain";
        } else if (70 <= n && n < 80) {
            return "snow";
        } else if (40 <= n && n < 50) {
            return "fog";
        } else if (80 <= n && n < 90) {
            return "showers";
        } else {
            return "other";
        }
    }
    getAboutJPWeather(): AboutJPWeather {
        const w = this.getAboutWeather();
        return DayWeather.weatherMap[w];
    }
}