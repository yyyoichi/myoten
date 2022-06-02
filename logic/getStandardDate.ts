import FormatDate from "./FormatDate";
export default function getStanderdData(d: string | Date = new Date()) {
    if (typeof d === "string") {
        d = new Date()
    }
    d.setHours(d.getHours() - 9);
    return new FormatDate(d);
}