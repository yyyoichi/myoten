import Head from 'next/head'
import Main from '../../components/frame/Main'
import Wrapper from "../../components/frame/Wrapper"

export default function Home() {
    return (
        <>
            <Head>
                <title>明天 -MYOTEN- / 利用規約</title>
                <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />
            </Head>
            <Wrapper>
                <Main>
                    <div>
                        <h2>明天 -MYOTEN- ついて</h2>
                        <p>明天 -MYOTEN- (以下、当サイト)は、<a href="https://www.jma.go.jp/" target="_blank" rel="noopener noreferrer">気象庁ホームページ</a>で公開されている天気図、天気予報（以下、コンテンツ）を用いています。</p>
                        <p>コンテンツ利用は、気象庁ホームページで公開されてる <a href="https://www.jma.go.jp/jma/kishou/info/coment.html" target="_blank" rel="noopener noreferrer">利用規約</a>に基づいています。</p>
                        <p>また、当サイトは気象を予報、予測するものではありません。</p>
                    </div>
                    <div>
                        <h2>禁止事項</h2>
                        <ul>
                            <li>当サイトへのスクレイピング行為</li>
                            <li>当サイトの脆弱性等の探査行為</li>
                            <li>その他、当サイトへの妨害行為</li>
                        </ul>
                    </div>
                    <div>
                        <h2>免責</h2>
                        <p>当サイト、またその内容について、予告なく変更、移転、削除が行われることがあります。</p>
                        <p>また、当サイトの運営者は以下について一切の責任を負いません。</p>
                        <ul>
                            <li>当サイトの利用によって生じた機会損失、その他の不利益</li>
                            <li>気象の正確性</li>
                        </ul>
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