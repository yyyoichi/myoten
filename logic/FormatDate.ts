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
        return this.date.getMonth() + 1;
    }
    getDate() {
        return this.date.getDate();
    }
    getHours() {
        return this.date.getHours();
    }
    getMinutes() {
        return this.date.getMinutes();
    }
}