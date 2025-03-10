import styles from './NotFound.module.scss'
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className={styles.Error}>
            <h1 className={styles.LargeTitle}>404</h1>
            <h3 className={styles.MediumTitle}>Page not found</h3>
            <p className={styles.Text}>Oops!, the page you looking for does not exist</p>
            <button className={styles.Button}>
                <ArrowLeft />
                Back to home
            </button>
        </div>
    )
}

export default NotFound;