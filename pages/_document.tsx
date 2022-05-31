import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Train+One&display=swap" rel="stylesheet" />
        <title>明天 -MYOTEN-</title>
        <meta name="description" content="天気図から明日の天気を当てる暇アプリ。明日の東京の天気は...？" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}