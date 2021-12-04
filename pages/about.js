import Head from 'next/head';
import Image from 'next/image';
import {useState} from 'react';
import {
  PhotographyIcon,
  RightArrowIcon,
  SEOIcon,
  SettingsIcon,
  WEBIcon,
} from '../common/icons';

import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

export default function About({data}) {
  const content = data.content || {};
  const [active, setActive] = useState(0);

  return (
    <Layout>
      <Head>
        <title>{data.title || ''}</title>
        <meta property="og:title" content={data.title} key="title" />
        <meta name="description" content={data.description || ''} />
      </Head>
      <div id={styles.header}>
        <div className="container p-0 ml-0  ">
          <h2>{data.header || ''}</h2>
        </div>
      </div>
      <div id={styles.content} className="container p-0 ml-0 mt-5">
        <div className="row justify-content-between p-0 ml-0">
          <div id={styles.image_container}>
            <Image
              src={(content.about && content.about.image) || placeholderImage()}
              alt={(content.about && content.about.alt) || ''}
              layout="fill"
              placeholder="blur"
              blurDataURL={
                (content.about && content.about.image) || placeholderImage()
              }
            />
          </div>
          <div id={styles.text_about}>
            {content.about &&
              content.about.text &&
              content.about.text.map((item, i) => {
                return <p key={i}>{item}</p>;
              })}
          </div>
          <div className="col-12 col-sm-6 mt-5">
            <h3>{(content.mission && content.mission.title) || ''}</h3>
            <p>{(content.mission && content.mission.text) || ''}</p>
          </div>
          <div className="col-12 col-sm-6 mt-5  ">
            <h3>{(content.facts && content.facts.title) || ''}</h3>
            <p>{(content.facts && content.facts.text) || ''}</p>
          </div>
        </div>
      </div>
      <div className="container ">
        <h3 id={styles.services_heading}>
          {(content.services && content.services.title) || ''}
        </h3>
      </div>
      <div id={styles.services}>
        <div className="container">
          <div className="row">
            {content.services &&
              content.services.content &&
              content.services.content.map((item, i) => {
                return (
                  <div
                    className={`col-6 col-sm-3 ${styles.service_item} ${
                      active === i && styles.active_service
                    }`}
                    onClick={(e) => setActive(i)}
                  >
                    <div>
                      {i === 0 && (
                        <SettingsIcon fill={active === i && '#423e3e'} />
                      )}
                      {i === 1 && (
                        <PhotographyIcon fill={active === i && '#423e3e'} />
                      )}
                      {i === 2 && <SEOIcon fill={active === i && '#423e3e'} />}
                      {i === 3 && <WEBIcon fill={active === i && '#423e3e'} />}
                      <p>{item.title || ''}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="container">
        <div id={styles.services_list}>
          <p className="p-0 mt-3">
            {(content.services &&
              content.services.content &&
              content.services.content[active].text) ||
              ''}
          </p>
          <ul>
            {content.services &&
              content.services.content &&
              content.services.content[active].list &&
              content.services.content[active].list.map((item, i) => {
                return (
                  <li key={i}>
                    <RightArrowIcon height="10" /> {item || ''}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
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
