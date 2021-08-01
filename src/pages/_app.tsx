import React from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id='root'>
      <Component {...pageProps} />
    </div>
  );
}
