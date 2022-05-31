// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import puppeteer from "puppeteer";
export default async function handler(req, res) {
  const url = "https://www.jma.go.jp/bosai/weather_map/";
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })
  const img = await page.$('.weather-map-viewarea img')
  const src = await (await img?.getProperty('src'))
  const imgSrc = await src?.jsonValue()
  console.log(imgSrc)
  res.status(200).json(imgSrc);
}
