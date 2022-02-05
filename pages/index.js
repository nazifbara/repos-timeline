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
          <InputField />
        </div>
      </main>
    </div>
  )
}
