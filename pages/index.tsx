import FadeIn from '../components/anime/FadeIn';
import Top from '../main/top/Top';
import Wrapper from '../components/frame/Wrapper';
import useWeather from '../weather/useWeather';
import getWeatherMap from '../weather/getWeatherMap';
import Head from 'next/head';
import FormatDate from '../logic/FormatDate';



type Props = {
  imgSrc: string,
  time: string
}
export default function Home({ imgSrc, time }: Props) {
  const { weather } = useWeather()
  return (
    <>
      <Head>
        <title>明天 -MYOTEN-</title>
        <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />
      </Head>
      <Wrapper>
        <FadeIn toggle={!weather.isEmply()} display={true}>
          <Top imgSrc={imgSrc} time={time}/>
        </FadeIn>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const time = new FormatDate().getDetail()
  console.log("re-build:",time);
  return {
    props: {
      imgSrc: await getWeatherMap(),
      time 
    },
    revalidate: 5 // 30分ごと
  };
}
