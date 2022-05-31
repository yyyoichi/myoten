import puppeteer from "puppeteer"
export default async function getWeatherMap() {
    const url = "https://www.jma.go.jp/bosai/weather_map/";
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })
  const img = await page.$('.weather-map-viewarea img')
  const src = await (await img?.getProperty('src'))
  const imgSrc = await src?.jsonValue() as string
  console.log(imgSrc)
  return imgSrc;
}