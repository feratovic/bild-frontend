import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout';

import styles from '../styles/Home.module.css';
import {PlayIcon} from '../common/icons';
import {useContext} from 'react';
import {PublicContext} from '../context';

export default function Home({data}) {
  const content = data.content || {};
  const {toggleModal} = useContext(PublicContext);

  return (
    <Layout>
      <div id={styles.home}>
        <div id={styles.background}></div>
        <div id={styles.image_container}>
          <Image
            src={(content.home && content.home.image) || placeholderImage()}
            alt={(content.home && content.home.alt) || ''}
            layout="fill"
            placeholder="blur"
            blurDataURL={
              (content.home && content.home.image) || placeholderImage()
            }
          />
        </div>
        <div id={styles.home_content}>
          {content.home &&
            content.home.text &&
            content.home.text.map((item, i) => {
              return <p key={i}>{item || ''}</p>;
            })}
          <Link href="/work">
            <a id={styles.btn_home}>BROWSE PORTFOLIO</a>
          </Link>
        </div>
      </div>
      <div id={styles.video}>
        <div className="container">
          <div className="row justify-content-between  align-items-center">
            <div className="col-12 col-xl-5" id={styles.video_container}>
              <div>
                <button
                  onClick={(e) =>
                    toggleModal(true, content.video ? content.video.link : null)
                  }
                >
                  <PlayIcon />
                </button>
              </div>
            </div>
            <div className="col-12 col-xl-7" id={styles.video_content}>
              <h3>{(content.video && content.video.title) || ''}</h3>
              {(content.video &&
                content.video.text &&
                content.video.text.map((item, i) => {
                  return <p key={i}>{item}</p>;
                })) ||
                ''}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/pages?title=Home');
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
