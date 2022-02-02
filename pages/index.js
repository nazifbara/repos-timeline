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

      <main>
        <AppBar />
        <div className="content-box">
          <InputField />
        </div>
      </main>
    </div>
  )
}
