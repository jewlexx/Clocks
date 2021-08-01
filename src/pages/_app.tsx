import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div id='root'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta
          name='description'
          content='A simple, highly customizable Clock, designed for performance, embedding, and ease of use in mind'
        />
        <meta
          name='keywords'
          content='clock, embed, api, easy, simple, iframe'
        />
        <meta name='theme-color' content='#4e54c8' />

        <link rel='manifest' href='/manifest.json' />
        <link
          href='/icons/icon-16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/icon-32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/icons/apple-touch-icon.png' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
