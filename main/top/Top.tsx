import Main from "../../components/frame/Main";
import FlexRow from "../../components/atom/flex/FlexRow";
import FlexColumn from "../../components/atom/flex/FlexColumn";
import FlexSpace from "../../components/atom/flex/FlexSpace";
import FlexRatio from "../../components/atom/flex/FlexRatio";

import styles from "../../styles/top/Top.module.css";
import ChoisCard from "./sub/ChoisCard";
import { AboutJPWeather, aboutJPWeathers } from "../../weather/WeatherIF";
import Hint from "./sub/Hint";
import Image from "next/image";
import {  useState } from "react";
import { useWeather } from "../../weather/useWeatherContext";
type Props = {
    imgSrc: string,
    time: string
}
export type CardState = {
    isAnswer: boolean,
    isOpen: boolean
}
export type CardStates = {
    [key in AboutJPWeather]: CardState;
};
type UserSelectCard = {
    "currect": Set<AboutJPWeather>,
    "all": Set<AboutJPWeather>,
}
export default function Top({ imgSrc, time }: Props) {
    console.log("top")
    const { weather: dayWeather } = useWeather()
    const nowWeathers = dayWeather.getAboutJPWeather()
    // ユーザのカード選択状況のデータ。クリックされた正解カードとクリックされたすべてのカードを記憶する
    const [userSelectCards, setUserSelectCards] = useState<UserSelectCard>({ "currect": new Set(), "all": new Set() })
    // カードの表裏あらわすデータ。
    const [cardStates, setCardStates] = useState(aboutJPWeathers.reduce((m, jpw) => {
        const isAnswer = nowWeathers.includes(jpw)
        return { ...m, [jpw]: { isAnswer, isOpen: false } }
    }, {}) as CardStates)

    /**
     * @description カードがクリックされたときに起動
     * @param clickJpw クリックされたカードの日本語天気
     */
    const onCardClick = (clickJpw: AboutJPWeather) => {
        setCardStates(old => {
            const newStates = aboutJPWeathers.reduce((m, jpw) => {
                const isAnswer = nowWeathers.includes(jpw)
                const isClickedCard = clickJpw === jpw
                const isCurrentCardOpened = !isClickedCard && old[jpw]["isOpen"] && old[jpw]["isAnswer"]
                //クリックされていない開き済みの正解カードはそのまま。
                //クリックされたカードは反転。
                //クリック以外のカードは裏面。
                const isOpen = isCurrentCardOpened ? true : isClickedCard ? !old[jpw]["isOpen"] : false;
                console.log(jpw, isOpen)
                return { ...m, [jpw]: { isAnswer, isOpen } }
            }, {}) as CardStates
            return newStates
        })
        setUserSelectCards(old => {
            old["all"].add(clickJpw)
            //クリックされたカードが正解カード
            if(nowWeathers.includes(clickJpw)) {
                old["currect"].add(clickJpw)
            }
            return old
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
                                    const props = {
                                        cardName: jpw,
                                        cardState: cardStates[jpw],
                                        onCardClick,
                                    }
                                    return <ChoisCard key={`${jpw}_${i}`} {...props} />
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