import Card from "../../component/atom/Card"
import { AboutJPWeather } from "../../weather/WeatherIndex"
import styles from "../../styles/Card.module.css";

type Props = {
    isSuccess: boolean,
    selectWeather: AboutJPWeather
}
export default function SuccessCard({ isSuccess, selectWeather }: Props) {
    const text = isSuccess ? "正解" : "残念"
    const color = isSuccess ? "blue" : "red"
    return (
        <Card style={{backgroundColor: "dimgrey", color, display: "inline-block"}}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.sub}>{selectWeather}</div>
        </Card>
    )
}