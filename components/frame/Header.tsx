import Link from "next/link";
import styles from "../../styles/Fram.module.css";
export default function Header() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.headBox}>
                    <Link href="/"><a>
                        <h1 className={styles.headTitle}>明天</h1>
                        <p className={styles.headSub}>MYOTEN</p>
                    </a></Link>
                </div>
            </div>
            <div className={styles.announcementBanner}>
                <span>🎉 </span>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfVnWhvloNlgUBELZmao_IVkdy_CdMTx177gac14XC0LMCRnw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.announcementLink}
                >
                    ユーザアンケート
                </a>
                <span>を募集しています！</span>
            </div>
        </>
    )
}