import Head from 'next/head'
import Link from 'next/link'
import Main from '../../components/frame/Main'
import Wrapper from "../../components/frame/Wrapper"

export default function Home() {
    return (
        <>
            <Head>
                <title>明天 -MYOTEN- / プライバシーポリシー</title>
                <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />
            </Head>
            <Wrapper>
                <Main>
                    <div>
                        <h2>プライバシーポリシー、個人情報保護方針</h2>
                        <p>明天 -MYOTEN-(以下、当サイト)は、利用者のアクセス状況を確認しています。</p>
                        <p>アクセス解析データは、当サイトのサービス向上のために利用されます。</p>
                    </div>
                    <div>
                        <h2>Googleアナリティクスについて</h2>
                        <p>当サイトは、アクセス解析ツール「Googleアナリティクス」を使用しています。</p>
                        <p>Googleアナリティクスは、当サイトの利用者のデータをCookieを用いて収集しています。</p>
                        <p>収集されたデータは匿名であり、個人を特定するものではありません。</p>
                        <p>データの収集についての詳細は、「 <Link href="https://policies.google.com/technologies/ads?hl=ja"><a style={{color: "blue"}} target="_blank" rel="noopener noreferrer">Googleポリシーと規約</a></Link>」を確認してください。</p>
                    </div>
                    <div>
                        <h2>発行</h2>
                        <p>2022年5月31日</p>
                    </div>
                </Main>
            </Wrapper>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}