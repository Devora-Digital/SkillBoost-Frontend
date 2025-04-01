import { ArrowRight } from 'lucide-react'
import styles from './Login.module.scss'
import Image from 'next/image'

export default function Login() {
  return (
    <div className={styles.SignIn}>
      <div className={styles.container}>
        <h2 className={styles.containerTitle}>Sign in to your account</h2>
        <div>
          <h5 className={styles.containerSection}>Email</h5>
          <input
            className={styles.containerInput}
            type='text'
            placeholder='Username or Email ID'
          />
        </div>

        <div>
          <h5 className={styles.containerSection}>Password</h5>
          <input
            className={styles.containerInput}
            type='password'
            placeholder='Enter Password'
          />
        </div>

        <button type='submit' className={styles.containerButton}>
          <span>Sign In</span>
          <ArrowRight size={16} />
        </button>

        <div className={styles.signWith}>
          <div className={styles.signWithLine}></div>
          <p className={styles.signWithText}>Sign in with</p>
          <div className={styles.signWithLine}></div>
        </div>

        <ul className={styles.socialsBox}>
          <li className={styles.social}>
            <Image
              src='/icons/icon-fb.svg'
              alt='Facebook'
              className={styles.socialIcon}
              width={24}
              height={24}
            />
            <p style={{ color: '#0866FF' }}>Facebook</p>
          </li>
          <li className={styles.social}>
            <Image
              src='/icons/icon-google.svg'
              alt='Google'
              className={styles.socialIcon}
              width={24}
              height={24}
            />
            <p style={{ color: '#EA4335' }}>Google</p>
          </li>
          <li className={styles.social}>
            <Image
              src='/icons/icon-microsoft.svg'
              alt='Microsoft'
              className={styles.socialIcon}
              width={24}
              height={24}
            />
            <p style={{ color: '#000000' }}>Microsoft</p>
          </li>
        </ul>
      </div>
      <Image
        className={styles.Image}
        src='/assets/img-login.png'
        alt='SkillBoost'
        width={625}
        height={934}
        priority
      />
    </div>
  )
}
