import Head from 'next/head'
import Wrapper from "../../components/frame/Wrapper"

export default function Home() {
    return (
        <>
            <Head>
                <title>明天 -MYOTEN- / プライバシーポリシー</title>
                <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />
            </Head>
            <Wrapper>
            </Wrapper>
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {}
    }
}