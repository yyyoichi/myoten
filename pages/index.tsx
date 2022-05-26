import { useContext } from 'react'
import FadeIn from '../component/anime/FadeIn';
import Top from '../main/Top';
import { WeekWeatherContext } from './_app';
import { getWeathreMap } from '../logic/weatherMap';
import Wrapper from '../component/frame/Wrapper';
import Head from 'next/head';


type Props = {
  imgSrc: string
}
export default function Home({ imgSrc }: Props) {
  const wth = useContext(WeekWeatherContext);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet" />
      </Head>
      <Wrapper>
        <FadeIn toggle={wth.hasData()} display={true}>
          <Top imgSrc={imgSrc} />
        </FadeIn>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const imgSrc = await getWeathreMap();
  return {
    props: {
      imgSrc
    },
    revalidate: 60 * 60 * 6 // 6時間ごと
  };
}
