import { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import WeekWeather from '../weather/WeekWeather';
export const WeekWeatherContext = createContext < WeekWeather > (new WeekWeather());

function MyApp({ Component, pageProps }: AppProps) {
  const [wth, setW] = useState < WeekWeather > (new WeekWeather(null));
  useEffect(() => {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Asia%2FTokyo";
    fetch(url).then(async res => {
      const json = await res.json();
      const data = new WeekWeather(json);
      setW(data);
    });
  }, []);
  return (
    <WeekWeatherContext.Provider value={wth}>
      <Component {...pageProps} />
    </WeekWeatherContext.Provider>
  )
}

export default MyApp
