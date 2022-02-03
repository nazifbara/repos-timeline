import { useRouter } from 'next/router'
import Head from 'next/head'

import { AppBar, UserCard, Timeline } from 'components'
import { GET_TIMELINE } from 'graphql/queries'
import client from 'apollo-client'

export default function TimelineView({ user, repositories }) {
  return (
    <div>
      <Head>
        <title>{user.name} repositories</title>
        <meta name="description" content={`${user.name} repositories`} />
      </Head>

      <main>
        <AppBar>
          <UserCard user={user} />
        </AppBar>
        <div className="content-box">
          <Timeline repositories={repositories} username={user.login} />
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ params: { username } }) {
  const { data, error, errors } = await client.query({
    query: GET_TIMELINE,
    variables: { username },
  })

  return {
    props: {
      user: data.user,
      repositories: data.repositoryOwner.repositories.edges.map((i) => ({ ...i.node })),
      errors: errors ?? null,
      error: error ?? null,
    },
  }
}
