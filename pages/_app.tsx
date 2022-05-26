import { AppProps } from 'next/app';
import { createContext, useEffect, useState } from 'react';
import '../styles/globals.css'
import initWeather from '../weather/jam/initWeather';

function MyApp({ Component, pageProps }: AppProps) {
  const { wth, WeatherContext }= initWeather();
  return (
    <WeatherContext.Provider value={wth}>
      <Component {...pageProps} />
    </WeatherContext.Provider>
  )
}

export default MyApp
