import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Табличка',
    link: 'https://tiny.cc/progivt20',
    imageUrl: 'img/table.png',
    description: (
      <>
        Все заслуги здесь. Необходимо выполнить вход в аккаунт Google.
      </>
    ),
  },
  {
    title: 'Видеозаписи',
    link: 'https://drive.google.com/drive/folders/1pis2VYVbRBTIke3vCnz0bMQITlNuFgsh',
    imageUrl: 'img/videos.png',
    description: (
      <>
        Записи лекций и практики в период  дистанционного обучениия
      </>
    ),
  },
  {
    title: 'GitHub',
    link: 'https://github.com/progivt/',
    imageUrl: 'img/adventure-cat.png',
    description: (
      <>
        Организация <b>progivt</b> на Гитхабе, все репозитории здесь.
      </>
    ),
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3><a href={link}>{title}</a></h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}: Добро пожаловать `}
      description="Курс «Основы программирования» для студентов ИВТ ИМИ СВФУ">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
