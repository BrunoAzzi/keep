import Head from 'next/head';
import initAuth from '../lib/initAuth';
import 'reset-css';
import '../components/styles/global.css';

initAuth();

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
