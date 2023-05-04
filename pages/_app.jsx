import Head from 'next/head';
import { Provider } from 'react-redux';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { CookiesBanner } from '@/components';
import { CookiesModal } from '@/components/modals';

import { store } from '@/store/store';

import '@/styles/reset.sass';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <Head>
        <title>New Staff</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <CookiesBanner />
        <CookiesModal />
      </Provider>
    </>
  );
}
