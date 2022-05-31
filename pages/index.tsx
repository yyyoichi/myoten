import FadeIn from '../components/anime/FadeIn';
import Top from '../main/Top';
import Wrapper from '../components/frame/Wrapper';
import useWeather from '../weather/useWeather';
import getWeatherMap from '../weather/getWeatherMap';



type Props = {
  imgSrc: string
}
export default function Home({ imgSrc }: Props) {
  const { weather } = useWeather()
  return (
    <>
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
