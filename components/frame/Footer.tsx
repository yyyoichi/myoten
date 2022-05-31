import styles from "../../styles/Fram.module.css";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footTitle}>明天</div>
            <div className={styles.footSub}>MYOTEN</div>
            <div className={styles.footerLinkBox}>
                <div className={styles.footerLink}><a href="/info/coment">利用規約</a></div>
                <div className={styles.footerLink}><a href="/info/privacy">プライバシーポリシー</a></div>
            </div>
        </div>
    )
}