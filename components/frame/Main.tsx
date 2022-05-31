import { ReactNode } from "react";
import styles from "../../styles/Container.module.css";
export default function Main(
    {children}:
    {children: ReactNode}
) {
    return <div className={styles.main}>
        {children}
    </div>
}