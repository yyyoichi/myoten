import { useContext } from 'react'
import FadeIn from '../component/anime/FadeIn';
import Top from '../main/Top';
import { WeekWeatherContext } from './_app';
import { getWeathreMap } from '../logic/weatherMap';
import Wrapper from '../component/frame/Wrapper';


type Props = {
  imgSrc: string
}
export default function Home({ imgSrc }: Props) {
  const wth = useContext(WeekWeatherContext);
  return (
    <Wrapper>
      <FadeIn toggle={wth.hasData()} display={true}>
        <Top imgSrc={imgSrc} />
      </FadeIn>
    </Wrapper>
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
