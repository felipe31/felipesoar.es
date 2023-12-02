import Head from "next/head";
import "../styles/globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Felipe Soares",
  description: "My online resume",
};

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other meta tags or links you need */}\
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} className={inter.className} />
    </>
  );
}

export default MyApp;
