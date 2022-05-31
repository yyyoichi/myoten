import { useState } from "react"
import FadeIn from "../../components/anime/FadeIn"
import Card from "../../components/atom/Card"
import DayWeather from "../../weather/day/MeteoDW"
import styles from "../../styles/Card.module.css"

type Props = {
    dayWeather: DayWeather
}
export default function Hint({ dayWeather }: Props) {
    const [isOpen, setOpen] = useState<boolean>(false);
    const onClick = () => {
        setOpen((o) => !o);
    }
    return (
        <>
            <FadeIn toggle={!isOpen} display={true}>
                <div onClick={onClick} >
                    <Card style={{ backgroundColor: "#a0caff", color: "#585858" }}>
                        <div className={styles.hintText}>ヒントを見る</div>
                    </Card>
                </div>
            </FadeIn>

            <FadeIn toggle={isOpen} display={true}>
                <div onClick={onClick}>
                    <Card>
                        <div>最高気温: {dayWeather.getTmp2Max()}</div>
                        <div>最低気温: {dayWeather.getTmp2Min()}</div>
                    </Card>
                </div>
            </FadeIn>
        </>
    )
}