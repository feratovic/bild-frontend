import Head from 'next/head';
import React, {useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import {GridLayoutIcon, ListLayoutIcon} from '../common/icons';
import Card from '../components/Card';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import SideCard from '../components/SideCard';
import styles from '../styles/Work.module.css';

export default function Work({data, works}) {
  const categories = data.content ? data.content.categories || [] : [];
  const [projects, setProjects] = useState(works.posts ? works.posts : []);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(works ? works.count : 0);

  const [active, setActive] = useState(0);
  const [grid, setGrid] = useState(true);
  const [category, setCategory] = useState('');

  const getMorePost = async () => {
    const res = await fetch(
      `http://localhost:3000/api/projects?start=${projects.length}&limit=9&category=${category}`
    );
    const newPosts = await res.json();
    setProjects([...projects, ...newPosts.posts]);

    if (projects.length + 9 >= count) {
      setHasMore(false);
    }
  };

  const changeCategory = async (e, i, name) => {
    setActive(i);
    if (name === 'All') {
      setCategory('');
    } else setCategory(name);

    const res = await fetch(
      `http://localhost:3000/api/projects?start=0&limit=9&category=${
        name === 'All' ? '' : name
      }`
    );
    const newPosts = await res.json();
    setProjects([...newPosts.posts]);
    setCount((prev) => newPosts.count);
    if (newPosts.count > 9) {
      setHasMore(true);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Work</title>
        <meta property="og:title" content="Page about my work" key="title" />
      </Head>
      <div id={styles.header}>
        <h2>Check Out What I can Do</h2>
      </div>
      <div className={` container ${styles.works}`}>
        <div className="row" id={styles.options}>
          <div className={`col-7 ${styles.categories}`}>
            {categories.map((item, index) => {
              return (
                <React.Fragment key={item}>
                  <button
                    className={`${styles.category_btn} ${
                      active === index && styles.active_btn
                    }`}
                    onClick={(e) => changeCategory(e, index, item)}
                  >
                    {item}
                  </button>
                  {index < categories.length - 1 && (
                    <span className="mr-3 ml-3"> / </span>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className={`col-5 `} id={styles.layouts}>
            <span className={styles.icon}>
              <GridLayoutIcon
                fill={grid && '#2ecc71'}
                onClick={(e) => setGrid(true)}
              />
            </span>

            <span className={styles.icon}>
              <ListLayoutIcon
                fill={!grid && '#2ecc71'}
                onClick={(e) => setGrid(false)}
              />
            </span>
          </div>
        </div>

        <div className=" row p-0 mn-1 ">
          <InfiniteScroll
            dataLength={count}
            next={getMorePost}
            hasMore={hasMore}
            loader={count > 0 && <Loader />}
            className=" row p-0 mn-1  "
          >
            {projects && projects.length > 0 ? (
              projects.map((item, index) => {
                return grid ? (
                  <Card
                    key={index}
                    src={item.cover}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    stlye={grid}
                  />
                ) : (
                  <SideCard
                    key={index}
                    src={item.cover}
                    alt={item.alt}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    stlye={grid}
                  />
                );
              })
            ) : (
              <div id={styles.no_results}>
                <h3>No Results</h3>
              </div>
            )}
          </InfiniteScroll>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/pages?title=Work');
  const data = await res.json();

  const res2 = await fetch(
    'http://localhost:3000/api/projects?start=0&limit=9'
  );
  const works = await res2.json();

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {data, works}, // will be passed to the page component as props
  };
}
