import styles from "../../styles/Fram.module.css";
export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headBox}>
                <h1 className={styles.headTitle}>明天</h1>
                <p className={styles.headSub}>MYOTEN</p>
            </div>
        </div>
    )
}