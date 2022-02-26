import { FunctionComponent, useEffect } from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  });

  return <Component {...pageProps} />;
};

export default App;
