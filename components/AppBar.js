import styles from 'styles/AppBar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function AppBar({ children }) {
  return (
    <header className={styles.appBar}>
      <Link passHref href="/">
        <a>
          <Image width={114} height={45} src="/assets/logo.svg" alt="site logo" />
        </a>
      </Link>
      {children}
    </header>
  )
}
