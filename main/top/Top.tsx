import Main from "../../components/frame/Main";
import FlexRow from "../../components/atom/FlexRow";
import FlexColumn from "../../components/atom/FlexColumn";
import FlexSpace from "../../components/atom/FlexSpace";
import FlexRatio from "../../components/atom/FlexRatio";

import styles from "../../styles/top/Top.module.css";
import ChoisCard from "./sub/ChoisCard";
import useWeather from "../../weather/useWeather";
import { aboutJPWeathers } from "../../weather/WeatherIF";
type Props = {
    imgSrc: string
}
export default function Top({ imgSrc }: Props) {
    const {weather: dayWeather} = useWeather();
    return (
        <Main>
            <FlexRow>
                <FlexRatio ratio={4}>
                    <div className={styles.imgBox}>
                        <img src={imgSrc}
                            className={styles.img}
                        />
                        <p className={styles.link_p}>出典:
                            <a href="https://www.jma.go.jp/bosai/weather_map/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            > 気象庁HP</a></p>
                    </div>
                </FlexRatio>
                <FlexRatio ratio={3}>
                    <FlexColumn>
                        <h2 className={styles.h2}>明日の天気は？</h2>
                        <div className={styles.selectCards}>
                            {
                                aboutJPWeathers.map(((jpw, i) => {
                                    return <ChoisCard key={`${jpw}_${i}`} selectionW={jpw} nowWeather={dayWeather.getAboutJPWeather()} />
                                }))

                            }
                        </div>
                        <FlexSpace marginDirection={"marginTop"}>
                            <div className={styles.hintCard}>
                                {/* <Hint dayWeather={dayWeather} /> */}
                            </div>
                        </FlexSpace>
                    </FlexColumn>
                </FlexRatio>
            </FlexRow>
        </Main>
    )
}