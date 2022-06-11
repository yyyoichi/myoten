import { ReactNode } from "react";
import styles from "../../../styles/Container.module.css";
export default function FlexColumn({ children }: { children: ReactNode }) {
    return <div className={styles.flexColumn}>
        {children}
    </div>
}