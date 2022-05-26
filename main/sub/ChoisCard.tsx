import { useState } from "react"
import FadeIn from "../../component/anime/FadeIn"
import Card from "../../component/atom/Card"
import { AboutJPWeather } from "../../weather/WeatherIndex"
import SuccessCard from "./SuccessCard"

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
                <SuccessCard isSuccess={nowWeather === selectionW} selectWeather={selectionW} />
            </FadeIn>
            <FadeIn toggle={isOpen} display={true}>
                <div onClick={onClick}>
                    <Card>
                        {selectionW}
                    </Card>
                </div>
            </FadeIn>
        </>
    )
}