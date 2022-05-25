import { ReactNode } from "react";
import styles from "../../styles/Card.module.css";
type Props = {
    children: ReactNode,
    style?: {
        backgroundColor?: string,
        color?: string,
        display?: string,
    }
}
export default function Card({children, style = {}}: Props) {
    return (
        <div className={styles.wrapper} style={style}>
            {children}
        </div>
    )
}