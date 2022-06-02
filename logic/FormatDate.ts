export default class FormatDate {
    date: Date;
    constructor(d: string | Date = new Date()) {
        if(typeof d === "string") d = new Date(d);
        this.date = d;
    }
    getFormatDate() {
        return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`
    }
    getDetail() {
        return this.getFormatDate() + ` ${this.getHours()}:${this.getMinutes()}`
    }
    getFullYear() {
        return this.date.getFullYear();
    }
    getMonth() {
        return this._toZero(2, this.date.getMonth() + 1);
    }
    getDate() {
        return this._toZero(2, this.date.getDate());
    }
    getHours() {
        return this._toZero(2, this.date.getHours());
    }
    getMinutes() {
        return this._toZero(2,  this.date.getMinutes());
    }
    private _toZero(num: number, value: number) {
        let zeros = "";
        for(let i = 0; i < num; i++) {
            zeros += "0"
        }
        const s = zeros + String(value)
        return s.slice(num * -1)
    }
}