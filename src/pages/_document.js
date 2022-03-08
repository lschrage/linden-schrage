import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <meta name="title" content="Linden Schrage" />
          <meta name="description" content="Welcome to my portfolio! I'm a sophomore at Harvard College studying Applied Mathematics. In my free time, I like to build cool things." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Linden Schrage" />
          <meta property="og:description" content="Welcome to my portfolio! I'm a sophomore at Harvard College studying Applied Mathematics. In my free time, I like to build cool things." />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Linden Schrage" />
          <meta property="twitter:description" content="Welcome to my portfolio! I'm a sophomore at Harvard College studying Applied Mathematics. In my free time, I like to build cool things." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
