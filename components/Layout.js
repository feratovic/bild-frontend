import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import {useContext} from 'react';
import {PublicContext} from '../context';
import Modal from './Modal';

export default function Layout(props) {
  const {modal, link} = useContext(PublicContext);

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />

      {modal && <Modal link={link} />}
    </div>
  );
}
