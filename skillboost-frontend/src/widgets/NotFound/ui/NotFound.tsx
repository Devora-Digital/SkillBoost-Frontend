import Link from 'next/link'
import styles from './NotFound.module.scss'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className={styles.Error}>
      <h1 className={styles.LargeTitle}>404</h1>
      <h3 className={styles.MediumTitle}>Page not found</h3>
      <p className={styles.Text}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link href='/' className={styles.Button}>
        <ArrowLeft />
        Back to home
      </Link>
    </div>
  )
}
