import FadeIn from '../components/anime/FadeIn';
import Top from '../main/top/Top';
import Wrapper from '../components/frame/Wrapper';
import useWeather from '../weather/useWeather';
import getWeatherMap from '../weather/getWeatherMap';
import Head from 'next/head';



type Props = {
  imgSrc: string
}
export default function Home({ imgSrc }: Props) {
  const { weather } = useWeather()
  return (
    <>
      <Head>
        <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />
      </Head>
      <Wrapper>
        <FadeIn toggle={!weather.isEmply()} display={true}>
          <Top imgSrc={imgSrc} />
        </FadeIn>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {

  return {
    props: {
      imgSrc: await getWeatherMap()
    },
    revalidate: 60 * 30 // 30分ごと
  };
}
