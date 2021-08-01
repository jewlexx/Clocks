import React from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
