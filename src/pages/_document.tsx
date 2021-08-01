import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Doc extends Document {
  render(): JSX.Element {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='A simple, highly customizable Clock, designed for performance, embedding, and ease of use in mind'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
