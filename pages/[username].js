import { useRouter } from 'next/router'
import Head from 'next/head'

import { AppBar, UserCard, Timeline } from 'components'
import { GET_TIMELINE } from 'graphql/queries'
import client from 'apollo-client'
import Link from 'next/link'

export default function TimelineView({ user, repositories, error }) {
  if (error) {
    return (
      <main>
        <div className="content-box">
          <h1>User Not Found</h1>
          <Link href="/">Return to the home page</Link>
        </div>
      </main>
    )
  }

  const emptyRepos = repositories.length === 0

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
          {emptyRepos && (
            <p style={{ textAlign: 'center' }}>{user.login} has no public repositories</p>
          )}
          <Timeline repositories={repositories} username={user.login} />
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ params: { username } }) {
  try {
    const { data } = await client.query({
      query: GET_TIMELINE,
      variables: { username },
    })
    return {
      props: {
        user: data.user,
        repositories: data.repositoryOwner.repositories.edges.map((i) => ({ ...i.node })),
      },
    }
  } catch (error) {
    return {
      props: {
        error: error.graphQLErrors[0].type,
      },
    }
  }
}
