import Link from 'next/link'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <div className={styles.logo}>
            <img
              className={styles.footerLogoIcon}
              src='/icons/icon-logo.png'
              alt='Byway'
            />
            <p className={styles.footerLogoText}>Byway</p>
          </div>
          <p className={styles.footerColumnttext}>
            Empowering learners through accessible and engaging online
            education. Byway is a leading online learning platform dedicated to
            providing high-quality, flexible, and affordable educational
            experiences.
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Get Help</h4>
          <Link href='/'>Contact Us</Link>
          <Link href='/'>Latest Articles</Link>
          <Link href='/'>FAQ</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Programs</h4>
          <Link href='/'>Art & Design</Link>
          <Link href='/'>Business</Link>
          <Link href='/'>IT & Software</Link>
          <Link href='/'>Languages</Link>
          <Link href='/'>Programming</Link>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Contact Us</h4>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <p>Tel: +(123) 456-7890</p>
          <p>Mail: bywayedu@webkul.in</p>
          <ul className={styles.footerColumnSoc}>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img src='/icons/icon-gb.svg' alt='SKILLBOOST' />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img src='/icons/icon-github.svg' alt='SKILLBOOST' />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img src='/icons/icon-google.svg' alt='SKILLBOOST' />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img src='/icons/icon-x.svg' alt='SKILLBOOST' />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img src='/icons/icon-microsoft.svg' alt='SKILLBOOST' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
