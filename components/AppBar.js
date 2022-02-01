import styles from 'styles/AppBar.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function AppBar() {
  return (
    <header className={styles.appBar}>
      <Link passHref href="/">
        <a>
          <Image width={114} height={45} src="/assets/logo.svg" alt="site logo" />
        </a>
      </Link>
      <h1>Visualize GitHub repositories through a timeline</h1>
    </header>
  )
}
