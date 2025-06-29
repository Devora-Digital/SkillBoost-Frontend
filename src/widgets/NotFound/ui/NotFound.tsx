import Link from 'next/link'
import styles from './NotFound.module.scss'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1 className={styles.largeTitle}>404</h1>
      <h3 className={styles.mediumTitle}>Page not found</h3>
      <p className={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href='/' className={styles.button}>
        <ArrowLeft />
        Back to home
      </Link>
    </div>
  )
}
