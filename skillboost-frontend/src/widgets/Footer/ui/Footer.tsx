import Link from 'next/link'
import styles from './Footer.module.scss'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <div className={styles.footerLogo}>
            <Image
              className={styles.footerLogoIcon}
              src='/icons/icon-logo.png'
              alt='SkillBoost'
              width={20}
              height={30}
            />
            <p className={styles.footerLogoText}>SkillBoost</p>
          </div>
          <p className={styles.footerColumntext}>
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
                <Image
                  src='/icons/icon-fb.svg'
                  alt='SkillBoost'
                  className={styles.footerSocImg}
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <Image
                  src='/icons/icon-github.svg'
                  alt='SkillBoost'
                  className={styles.footerSocImg}
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <Image
                  src='/icons/icon-google.svg'
                  alt='SkillBoost'
                  className={styles.footerSocImg}
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <Image
                  src='/icons/icon-x.svg'
                  alt='SkillBoost'
                  className={styles.footerSocImg}
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li className={styles.footerSocIcon}>
              <a href='#'>
                <Image
                  src='/icons/icon-microsoft.svg'
                  alt='SKILLBOOST'
                  className={styles.footerSocImg}
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
