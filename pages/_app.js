import '../styles/globals.css'
import Head from "next/head"

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Havanna | Build the future you want.</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Abayomi Olatunji" />
        <meta name="description" content="Invest in high-yield, professionally managed virtual real estate, starting with as little as #10,000." />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
