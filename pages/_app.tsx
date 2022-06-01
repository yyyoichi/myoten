import '../styles/globals.css'
import { useRouter } from "next/router";
import React, { useEffect } from 'react'

import GoogleAnalytics from "../components/frame/GoogleAnalytics"
import useWeather from '../weather/useWeather';
import { existsGaId, pageview } from '../lib/gtag';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useWeather();
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
  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

