import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
