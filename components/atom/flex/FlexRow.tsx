import { ReactNode } from "react";
import styles from "../../../styles/Container.module.css";
export default function FlexRow({ children }: { children: ReactNode }) {
    return <div className={styles.flexRow}>
        {children}
    </div>
}