import { AppProps } from 'next/app';
import '../styles/globals.css'
import useWeather from '../components/useWeather';

function MyApp({ Component, pageProps }: AppProps) {
  useWeather();
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
