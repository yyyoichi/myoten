// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Asia%2FTokyo';
  const response = await fetch(url);
  if (response.status !== 200) {
    return {
      data: 'faliture'
    }
  }
  const data = await response.json();
  res.status(200).json(data);
}
