import { useState } from "react";
import Main from "../component/frame/Main";
import Hint from "./sub/Hint";
import FlexRow from "../component/atom/FlexRow";
import FlexColumn from "../component/atom/FlexColumn";
import FlexSpace from "../component/atom/FlexSpace";
import FlexRatio from "../component/atom/FlexRatio";

import styles from "../styles/top/Top.module.css";
import ChoisCard from "./sub/ChoisCard";
import DayWeather from "../weather/day/MeteoDW";
import useWeather from "../weather/useWeather";
type Props = {
    imgSrc: string
}
export default function Top({ imgSrc }: Props) {
    const {weather: dayWeather} = useWeather();
    const weatherOpt = DayWeather.aboutJPWeatherList
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
                            {/* {
                                weatherOpt.map(((jpw, i) => {
                                    return <ChoisCard key={`${jpw}_${i}`} selectionW={jpw} nowWeather={dayWeather.getAboutJPWeather()} />
                                }))

                            } */}
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