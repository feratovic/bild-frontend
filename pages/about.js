import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About({data}) {
  const content = data.content || {};
  console.log(content);

  return (
    <Layout>
      <Head>
        <title>{data.title || ''}</title>
        <meta property="og:title" content="Page about" key="title" />
      </Head>
      <div id={styles.header}>
        <div className="container p-0 ml-0  ">
          <h2>{data.header || ''}</h2>
        </div>
      </div>
      <div id={styles.content} className="container  border"></div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/pages?title=About');
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {data}, // will be passed to the page component as props
  };
}
