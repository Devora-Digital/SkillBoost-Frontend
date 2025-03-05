import Link from 'next/link'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <img
              className={styles.footerLogoIcon}
              src='/icons/icon-logo.png'
              alt='SKILLBOOST'
            />
            <p className={styles.footerLogoText}>SkillBoost</p>
          </div>
          <p className={styles.footerColumnttext}>
            Empowering learners through accessible and engaging online
            education. <br></br>SkillBoost is a leading online learning platform
            dedicated to providing high-quality, flexible, and affordable
            educational experiences.
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Get Help</h4>
          <Link href='/' className={styles.footerLink}>
            Contact Us
          </Link>
          <Link href='/' className={styles.footerLink}>
            Latest Articles
          </Link>
          <Link href='/' className={styles.footerLink}>
            FAQ
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Programs</h4>
          <Link href='/' className={styles.footerLink}>
            Art & Design
          </Link>
          <Link href='/' className={styles.footerLink}>
            Business
          </Link>
          <Link href='/' className={styles.footerLink}>
            IT & Software
          </Link>
          <Link href='/' className={styles.footerLink}>
            Languages
          </Link>
          <Link href='/' className={styles.footerLink}>
            Programming
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerColumnTitle}>Contact Us</h4>
          <p>Address: 123 Main Street, Anytown, CA 12345</p>
          <p>Tel: +(123) 456-7890</p>
          <p>Mail: bywayedu@webkul.in</p>
          <ul className={styles.footerColumnSoc}>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img
                  src='/icons/icon-fb.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img
                  src='/icons/icon-github.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img
                  src='/icons/icon-google.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img
                  src='/icons/icon-x.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <img
                  src='/icons/icon-microsoft.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
export default Footer
