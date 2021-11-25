import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import React from 'react';
import {useEffect} from 'react';

function MyApp({Component, pageProps}) {
    useEffect(() => {
        console.log('vypísané');
        import('bootstrap/dist/js/bootstrap');
    }, []);

    return <Component {...pageProps} />;
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
