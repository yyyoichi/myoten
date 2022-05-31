import { ReactNode } from "react";
import styles from "../../styles/Container.module.css";
type Props = {
    children: ReactNode
}
export default function InlineBlock({children}: Props) {
    return (
        <div className={styles.inlineBlock}>
            {children}
        </div>
    )
}