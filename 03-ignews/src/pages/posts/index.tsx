import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>11 janeiro de 2022</time>
            <strong>Visões inovadoras do código livre e do open source</strong>
            <p>Iniciativas de código aberto e softwares livres foram responsáveis em moldar o principal meio de comunicação moderno</p>
          </a>
          <a href="#">
            <time>11 janeiro de 2022</time>
            <strong>Visões inovadoras do código livre e do open source</strong>
            <p>Iniciativas de código aberto e softwares livres foram responsáveis em moldar o principal meio de comunicação moderno</p>
          </a>
          <a href="#">
            <time>11 janeiro de 2022</time>
            <strong>Visões inovadoras do código livre e do open source</strong>
            <p>Iniciativas de código aberto e softwares livres foram responsáveis em moldar o principal meio de comunicação moderno</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type','post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  })

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }

}