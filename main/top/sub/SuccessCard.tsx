import Card from "../../../components/atom/Card"
import styles from "../../styles/Card.module.css";
import { AboutJPWeather } from "../../../weather/WeatherIF";

type Props = {
    isSuccess: boolean,
    selectWeather: AboutJPWeather
}
export default function SuccessCard({ isSuccess, selectWeather }: Props) {
    const text = isSuccess ? "正解" : "残念"
    const color = isSuccess ? /*"blue"*/"#2525d7" : /*"red"*/"#dd1d1d"
    return (
        <Card style={{backgroundColor: "#e5e5e5", color, display: "inline-block"}}>
            <div className={styles.title}>
                {text}
            </div>
            <div className={styles.sub}>{selectWeather}</div>
        </Card>
    )
}