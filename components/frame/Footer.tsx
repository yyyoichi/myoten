import Link from "next/link";
import styles from "../../styles/Fram.module.css";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <Link href="/"><a>
                <div className={styles.footTitle}>明天</div>
                <div className={styles.footSub}>MYOTEN</div>
            </a></Link>
            <div className={styles.footerNewsBox}>
                <div className={styles.footerNewsTitle}>ニュース</div>
                <iframe
                    src="https://hako-views.yyyoichi.com/announcements/QHIVgpVUtwN5RBCuJQ1K"
                    style={{ width: "100%", height: "150px", border: "none" }}
                    title="お知らせ一覧"
                    sandbox="allow-scripts allow-same-origin"
                ></iframe>
            </div>
            <div className={styles.footerLinkBox}>
                <div className={styles.footerLink}><Link href="/info/coment"><a>利用規約</a></Link></div>
                <div className={styles.footerLink}><Link href="/info/privacy"><a>プライバシーポリシー</a></Link></div>
            </div>
        </div>
    )
}