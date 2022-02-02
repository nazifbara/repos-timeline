import { useRouter } from 'next/router'

export default function TimelineView() {
  const router = useRouter()
  const { username } = router.query

  return <div>{username}</div>
}
