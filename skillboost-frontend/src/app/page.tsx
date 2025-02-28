import { Header } from '@/widgets/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Page</h1>
      <Header isAuthenticated={false} />
      <Header isAuthenticated={true} />
    </div>
  )
}
