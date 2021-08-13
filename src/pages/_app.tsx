// @ts-nocheck
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  });

  return <Component {...pageProps} />;
}
