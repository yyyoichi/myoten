export default class FormatDate {
    date: Date;
    constructor(d: string | Date) {
        if(typeof d === "string") d = new Date(d);
        this.date = d;
    }
    getRormatDate() {
        return `${this.getFullYear()}-${this.getMonth()}-${this.getDate()}`
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
}