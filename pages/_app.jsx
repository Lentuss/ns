import Head from 'next/head';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

import '@/styles/globals.css';
import '@/styles/reset.sass';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>New Staff</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
