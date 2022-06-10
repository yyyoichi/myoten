import FormatDate from "../lib/FormatDate";

export default class WeatherMapUrl {
  private d: Date

  constructor() {
    const d = new Date()
    const nowHours = d.getHours()
    d.setHours(nowHours - (nowHours % 3))
    d.setMinutes(0)
    //3時間刻みの標準時の00分に変更
    this.d = d
  }

  public async get() {
    let url: string;
    let response: Response;
    do {
      url = this._createUrl()
      response = await fetch(url)
      this._nextDate()
    } while (response.status !== 200)
    return url
  }
  private _createUrl() {
    const fd = new FormatDate(this.d, 0);
    const year = fd.getFullYear();
    const month = fd.getMonth();
    const date = fd.getDate();
    const hours = fd.getHours();
    const minutes = fd.getMinutes();
    const path1 = `${year + month}`;
    const path2 = `${path1 + date + hours + minutes}`
    const url = `https://www.data.jma.go.jp/fcd/yoho/data/wxchart/quick/${year + month}/SPAS_COLOR_${path2}.png`;
    return url
  }
  private _nextDate() {
    const nowHours = this.d.getHours()
    this.d.setHours(nowHours - 3)
  }
}