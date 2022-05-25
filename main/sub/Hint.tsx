import { useState } from "react"
import FadeIn from "../../component/anime/FadeIn"
import Card from "../../component/atom/Card"
import DayWeather from "../../weather/DayWeather"

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
                <Card style={{backgroundColor: "khaki", color: "dimgray"}}>
                    <div onClick={onClick}>ヒントを見る</div>
                </Card>
            </FadeIn>

            <FadeIn toggle={isOpen} display={true}>
                <Card>
                    <div onClick={onClick}>
                        <div>最高気温: {dayWeather.getTmp2Max()}</div>
                        <div>最低気温: {dayWeather.getTmp2Min()}</div>
                    </div>
                </Card>
            </FadeIn>
        </>
    )
}