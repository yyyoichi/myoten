import FadeIn from '../component/anime/FadeIn';
import Top from '../main/Top';
import { getWeathreMap } from '../logic/weatherMap';
import Wrapper from '../component/frame/Wrapper';
import Head from 'next/head';
import useWeather from '../components/useWeather';


type Props = {
  imgSrc: string
}
export default function Home({ imgSrc }: Props) {
  const { weather } = useWeather()
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet" />
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
  // const imgSrc = await getWeathreMap();
  return {
    props: {
      imgSrc : "https://www.jma.go.jp/bosai/weather_map/data/png/2…T_CHT_JCIspas_JCP600x581_JRcolor_Tjmahp_image.png"
    },
    revalidate: 60 * 60 * 6 // 6時間ごと
  };
}
