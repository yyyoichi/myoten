import puppeteer from "puppeteer";
export const getWeathreMap = async () => {
    const url = "https://www.jma.go.jp/bosai/weather_map/";
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, {waitUntil: 'networkidle2'})
    const img = await page.$('.weather-map-viewarea img')
    const src = await (await img?.getProperty('src'))
    const imgSrc = await src?.jsonValue()
    console.log(imgSrc)
    return imgSrc;
}
