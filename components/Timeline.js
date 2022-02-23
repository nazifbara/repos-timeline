import styles from 'styles/Timeline.module.scss'

import { StarIcon, ForkIcon } from 'components'
import { formatDate } from 'utils/helpers'

export default function Timeline({ repositories, username }) {
  return (
    <div className={styles.timeline}>
      {repositories.map((r) => (
        <article key={r.id} className={`${styles.timeline__item} `}>
          <time dateTime={r.createdAt}>{formatDate(r.createdAt)}</time>
          <div className={styles.timeline__separator}>
            <div className={styles.timeline__dot} />
            <div className={styles.timeline__connector} />
          </div>
          <a
            href={`https://github.com/${username}/${r.name}`}
            rel="noreferrer"
            target="_blank"
            className={`${styles.timeline__content} ${r.isArchived && 'archived'}`}
          >
            <time dateTime={r.createdAt}>{formatDate(r.createdAt)}</time>
            <div className={`flex ai-c ${styles.timeline__heading}`}>
              {r.isFork && <ForkIcon />}
              <h2>{r.name}</h2>
              <div className="flex ai-c">
                <StarIcon /> {r.stargazerCount}
              </div>
            </div>
            <p>{r.description}</p>
          </a>
        </article>
      ))}
    </div>
  )
}
