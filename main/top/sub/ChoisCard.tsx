import { useState } from "react"
import FadeIn from "../../../components/anime/FadeIn"
import Card from "../../../components/atom/Card"
import SuccessCard from "./SuccessCard"

import styles from "../../../styles/Card.module.css"
import { AboutJPWeather } from "../../../weather/WeatherIF"
import { CardState } from "../Top"

type Props = {
    cardName: AboutJPWeather;
    cardState: CardState;
    onCardClick: (clickJpw: AboutJPWeather) => void;
}
export default function ChoisCard({ cardName, cardState, onCardClick }: Props) {
    const [isOpen, setOpen] = useState<boolean>(true);
    const onClick = () => {
        // setOpen((o) => !o);
    }
    return (
        <>
            <FadeIn toggle={!cardState["isOpen"]} display={true}>
                <div onClick={() => onCardClick(cardName)}>
                    <SuccessCard isSuccess={cardState["isAnswer"]} cardName={cardName} />
                </div>
            </FadeIn>
            <FadeIn toggle={cardState["isOpen"]} display={true}>
                <div onClick={() => onCardClick(cardName)}>
                    <Card>
                        <div className={styles.title}>
                            {cardName}
                        </div>
                    </Card>
                </div>
            </FadeIn>
        </>
    )
}