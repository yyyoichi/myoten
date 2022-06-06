import Link from "next/link";
import styles from "../../styles/Fram.module.css";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href="/"><a>
                <div className={styles.footTitle}>明天</div>
                <div className={styles.footSub}>MYOTEN</div>
            </a></Link>
            <div className={styles.footerLinkBox}>
                <div className={styles.footerLink}><Link href="/info/coment"><a>利用規約</a></Link></div>
                <div className={styles.footerLink}><Link href="/info/privacy"><a>プライバシーポリシー</a></Link></div>
            </div>
        </div>
    )
}