import styles from 'styles/InputField.module.scss'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InputField() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleInputChange = (e) => setUsername(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username) {
      return
    }
    router.push(`/${username}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['input-field']}>
      <input
        onChange={handleInputChange}
        value={username}
        placeholder="Enter a GitHub username"
        type="text"
      />

      <button>Generate</button>
    </form>
  )
}
