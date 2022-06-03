import FormatDate from "../logic/FormatDate";

export default async function getWeatherMap() {
  const d = new Date()
  const nowHours = d.getHours()
  d.setHours(nowHours - (nowHours % 3));
  d.setMinutes(0);
  const fd = new FormatDate(d);
  const year = fd.getFullYear();
  const month = fd.getMonth();
  const date = fd.getDate();
  const hours = fd.getHours();
  const minutes = fd.getMinutes();
  const path1 = `${year+month}`;
  const path2 = `${path1 + date + hours + minutes}`
  const url = `https://www.data.jma.go.jp/fcd/yoho/data/wxchart/quick/${year+month}/SPAS_COLOR_${path2}.png`;
  return url;
}