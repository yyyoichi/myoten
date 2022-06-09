import '../styles/globals.css'
import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import GoogleAnalytics from "../components/frame/GoogleAnalytics"
import { existsGaId, pageview } from '../lib/gtag';
import { AppProps } from 'next/app';
import { useWeatherContext, WeatherProvider } from '../weather/useWeatherContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      return
    }

    const handleRouteChange = (path: string) => {
      pageview(path)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])


  const weather = useWeatherContext()
  const Provider = WeatherProvider
  return (
    <>
      <GoogleAnalytics />
      <Provider value={weather}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp

