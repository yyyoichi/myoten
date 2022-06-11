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
import { useCallback, useEffect, useState } from "react";
import { useWeather } from "../../weather/useWeatherContext";
import PopupWindow from "../../components/frame/PopupWindow";
import usePopupWindow from "../../lib/popup/usePopupWindow";
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

    const [popupControl, setPopupControl] = usePopupWindow()

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
                return { ...m, [jpw]: { isAnswer, isOpen } }
            }, {}) as CardStates
            return newStates
        })
        setUserSelectCards(old => {
            old["all"].add(clickJpw)
            //クリックされたカードが正解カード
            if (nowWeathers.includes(clickJpw)) {
                old["currect"].add(clickJpw)
                //正当数がカンスト
                console.log("answer.length", nowWeathers.length === old["currect"].size)
                if (nowWeathers.length === old["currect"].size) {
                    //popupWindowを一度だけ表示する
                    setPopupControl(oldCtr => {
                        const ctr = oldCtr === "end" ? "end" : "show"
                        console.log(ctr)
                        return ctr
                    })
                }
            }
            return old
        })
    }
    const getResultMsg = useCallback(() => {
        const ratio = userSelectCards["currect"].size / userSelectCards["all"].size
        if (ratio > 0.9) {
            return "正解！素晴らしい！"
        }
        if (ratio > 0.5) {
            return "正解！"
        }
        return "タップが気持ち良かった？"
    }, [userSelectCards])
    return (
        <Main>
            <PopupWindow onClick={() => setPopupControl("end")} show={popupControl === "show"}>
                <div className={styles.popupWrapper}>
                    <div>明日の天気は...</div>
                    <div>「<span className={styles.answer}>{dayWeather.getDetailWeather()}</span>」です</div>
                    <div className={styles.popupImgBox}>
                        <Image src={imgSrc}
                            alt="天気図"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div className={styles.resultMsg}>
                        {getResultMsg()}
                    </div>
                </div>
            </PopupWindow>
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
                                {
                                    popupControl === "set" ?
                                    <Hint dayWeather={dayWeather} />
                                    :<div className={styles.showAnsText} onClick={() => setPopupControl("show")}>答えを見る</div>
                                    }
                            </div>
                        </FlexSpace>

                    </FlexColumn>
                </FlexRatio>
            </FlexRow>
        </Main>
    )
}