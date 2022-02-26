import type { FunctionComponent } from 'react';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
