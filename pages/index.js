/* eslint-disable @next/next/no-img-element */
import styles from 'styles/Home.module.scss'
import Head from 'next/head'
import Image from 'next/image'

import { AppBar, InputField } from 'components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Repos Timeline</title>
        <meta name="description" content="Generate repositories timeline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <AppBar>
          <h1>Visualize GitHub repositories through a timeline</h1>
        </AppBar>
        <div className="content-box">
          <a
            href="https://www.producthunt.com/posts/repostimeline?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-repostimeline"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=332685&theme=light"
              alt="ReposTimeline - Generate&#0032;GitHub&#0032;repositories&#0032;timeline&#0032;using&#0032;a&#0032;username | Product Hunt"
              style={{
                width: '250px',
                height: '54px',
                position: 'fixed',
                bottom: '100px',
                right: '50px',
              }}
              width="250"
              height="54"
            />
          </a>
          <InputField />
        </div>
      </main>
    </div>
  )
}
