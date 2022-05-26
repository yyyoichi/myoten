import { useState } from "react"
import FadeIn from "../../component/anime/FadeIn"
import Card from "../../component/atom/Card"
import { AboutJPWeather } from "../../weather/WeatherIndex"
import SuccessCard from "./SuccessCard"

import styles from "../../styles/Card.module.css"

type Props = {
    nowWeather: AboutJPWeather,
    selectionW: AboutJPWeather,
}
export default function ChoisCard({ nowWeather, selectionW }: Props) {
    const [isOpen, setOpen] = useState<boolean>(true);
    const onClick = () => {
        setOpen((o) => !o);
    }
    return (
        <>
            <FadeIn toggle={!isOpen} display={true}>
                <div onClick={onClick}>
                    <SuccessCard isSuccess={nowWeather === selectionW} selectWeather={selectionW} />
                </div>
            </FadeIn>
            <FadeIn toggle={isOpen} display={true}>
                <div onClick={onClick}>
                    <Card>
                        <div className={styles.title}>
                            {selectionW}
                        </div>
                    </Card>
                </div>
            </FadeIn>
        </>
    )
}