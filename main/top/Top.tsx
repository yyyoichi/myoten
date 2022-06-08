import Main from "../../components/frame/Main";
import FlexRow from "../../components/atom/FlexRow";
import FlexColumn from "../../components/atom/FlexColumn";
import FlexSpace from "../../components/atom/FlexSpace";
import FlexRatio from "../../components/atom/FlexRatio";

import styles from "../../styles/top/Top.module.css";
import ChoisCard from "./sub/ChoisCard";
import useWeather from "../../weather/useWeather";
import { AboutJPWeather, aboutJPWeathers } from "../../weather/WeatherIF";
import Hint from "./sub/Hint";
import Image from "next/image";
import { useState } from "react";
type Props = {
    imgSrc: string,
    time: string
}
type CardState = {
    isAnswer: boolean,
    isOpen: boolean
}
export default function Top({ imgSrc, time }: Props) {
    const { weather: dayWeather } = useWeather();
    const nowWeathers = dayWeather.getAboutJPWeather()
    const [cardStates, setCardStates] = useState(aboutJPWeathers.reduce((m, jpw) => {
        const isAnswer = nowWeathers.includes(jpw)
        m.set(jpw, {isAnswer, isOpen: false})
        return m
    }, new Map<AboutJPWeather, CardState>()));
    const onCardClick = (clickJpw: AboutJPWeather) => {
        setCardStates(old => {
            const newStates = aboutJPWeathers.reduce((m, jpw) => {
                const isAnswer = nowWeathers.includes(jpw)
                const isClickCard = clickJpw === jpw;
                //@ts-ignore
                const isOpen: boolean = isClickCard ? !old.get(jpw)["isOpen"] :false;
                m.set(jpw, {isAnswer, isOpen})
                return m
            }, new Map<AboutJPWeather, CardState>())
            return newStates
        })
        
    }
    return (
        <Main>
            <FlexRow>
                <FlexRatio ratio={4}>
                    <div className={styles.imgBox}>
                        <Image src={imgSrc}
                            className={styles.img}
                            alt="天気図"
                            width={550}
                            height={550}
                        />
                        <p className={styles.link_p}>出典:
                            <a href="https://www.jma.go.jp/bosai/weather_map/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            > 気象庁HP</a></p>
                        <p className={styles.link_p}>取得: {time}</p>
                    </div>
                </FlexRatio>
                <FlexRatio ratio={3}>
                    <FlexColumn>
                        <h2 className={styles.h2}>東京の明日の天気は？</h2>
                        <div className={styles.selectCards}>
                            {
                                aboutJPWeathers.map(((jpw, i) => {
                                    return <ChoisCard key={`${jpw}_${i}`} selectionW={jpw} nowWeather={dayWeather.getAboutJPWeather()} />
                                }))

                            }
                        </div>
                        <FlexSpace marginDirection={"marginTop"}>
                            <div className={styles.hintCard}>
                                <Hint dayWeather={dayWeather} />
                            </div>
                        </FlexSpace>
                    </FlexColumn>
                </FlexRatio>
            </FlexRow>
        </Main>
    )
}