import styles from 'styles/UserCard.module.scss'
import Image from 'next/image'

export default function UserCard({ user }) {
  return (
    <div className={styles['user-card']}>
      <a
        href={`https://github.com/${user.login}`}
        rel="noreferrer"
        target="_blank"
        className="flex ai-c"
      >
        <Image
          className={styles['user-card__avatar']}
          alt={`${user.name} avatar`}
          src={user.avatarUrl}
          width={100}
          height={100}
        />
        <div className={styles['user-card__info']}>
          <h1>
            <strong>{user.name}</strong>
          </h1>
          <h2>{user.login}</h2>
        </div>
      </a>
    </div>
  )
}
