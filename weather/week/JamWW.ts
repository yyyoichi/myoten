import WeekWeather from "./WeekWeather";

export default class JamWW extends WeekWeather {
    constructor(json = null) {
        super();
        if (!json) return;
    }
}