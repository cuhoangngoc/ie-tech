import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/Nunito-Regular.woff2') format('woff2'),
                   url('/fonts/Nunito-Regular.woff') format('woff');
            }
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 600;
              font-display: swap;
              src: url('/fonts/Nunito-SemiBold.woff2') format('woff2'),
                   url('/fonts/Nunito-SemiBold.woff') format('woff');
            }
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/Nunito-Bold.woff2') format('woff2'),
                   url('/fonts/Nunito-Bold.woff') format('woff');
            }
          `}</style>
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;