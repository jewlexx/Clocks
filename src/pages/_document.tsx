import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from 'next/document';

export default class Doc extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="A simple, highly customizable Clock, designed for performance, embedding, and ease of use in mind"
          />
          <meta name="keywords" content="clock, embed, api, easy, simple, iframe" />
          <meta name="theme-color" content="#4e54c8" />

          <link rel="manifest" href="/manifest.webmanifest" />
          <link href="/icons/icon-16.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/icons/icon-32.png" rel="icon" type="image/png" sizes="32x32" />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
