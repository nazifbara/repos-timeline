import Head from 'next/head'
import Image from 'next/image'

import { AppBar } from 'components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Repos Timeline</title>
        <meta name="description" content="Generate repositories timeline" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar />
      </main>
    </div>
  )
}
