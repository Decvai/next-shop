import Head from 'next/head';
import NextNprogress from 'nextjs-progressbar';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Hebeber</title>
				<meta
					name='viewport'
					content='initial-scale=1.0, width=device-width'
				/>
			</Head>

			<Provider store={store}>
				<div className='wrapper'>
					<Navbar />
					<NextNprogress
						color='#000'
						startPosition={0.7}
						stopDelayMs={200}
						height={3}
						showOnShallow={true}
					/>
					<Component {...pageProps} />
					<Footer />
				</div>
			</Provider>
		</>
	);
}

export default MyApp;
