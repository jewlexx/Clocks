import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div id='root'>
			<Head>
				<meta
					name='description'
					content='A simple, highly customizable Clock, designed for performance, embedding, and ease of use in mind'
				/>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
