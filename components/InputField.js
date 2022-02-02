import styles from 'styles/InputField.module.scss'

export default function InputField() {
  return (
    <div className={styles['input-field']}>
      <input placeholder="Enter a GitHub username" type="text" />
      <button>Generate</button>
    </div>
  )
}
