import styles from 'styles/InputField.module.scss'
import { useState } from 'react'
import Link from 'next/link'

export default function InputField() {
  const [username, setUsername] = useState('')

  const handleInputChange = (e) => setUsername(e.target.value)
  return (
    <div className={styles['input-field']}>
      <input
        onChange={handleInputChange}
        value={username}
        placeholder="Enter a GitHub username"
        type="text"
      />

      <Link passHref href={`/${username}`}>
        <button>Generate</button>
      </Link>
    </div>
  )
}
