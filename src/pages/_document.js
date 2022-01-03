import Document, { Head, Html, Main, NextScript } from "next/document";

// O _document RODA APENAS UMA VEZ AO CARREGAR O PROJETO
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="theme-color" content="#3e7cc5"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
