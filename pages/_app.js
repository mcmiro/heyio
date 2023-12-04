import Layout from '../components/layout/Layout';
import Head from 'next/head';
import { GoogleFonts } from 'next-google-fonts';

import '../styles/globals.css';
import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:ital,wght@0,700;1,200&display=swap" />
      <Head>
        <title>Heyio</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
