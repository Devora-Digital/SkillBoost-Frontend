import { ArrowRight } from 'lucide-react'
import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.containerForm}>
        <h2 className={styles.formTitle}>Sign in to your account</h2>
        <div>
          <h5 className={styles.formSection}>Email</h5>
          <input
            className={styles.formInput}
            type='text'
            placeholder='Username or Email ID'
          />
        </div>
        <div>
          <h5 className={styles.formSection}>Password</h5>
          <input
            className={styles.formInput}
            type='password'
            placeholder='Enter Password'
          />
        </div>
        <button type='submit' className={styles.formButton}>
          <span>Sign In</span>
          <ArrowRight />
        </button>

        <div className={styles.signWith}>
          <div className={styles.signWith__line}></div>
          <p className={styles.signWith__text}>Sign up with</p>
          <div className={styles.signWith__line}></div>
        </div>

        <ul className={styles.socialsBox}>
          <li className={styles.social}>
            <img
              src='/icons/icon-fb.svg'
              alt='Facebook'
              className={styles.socialIcon}
            />
            <p style={{ color: '#0866FF' }}>Facebook</p>
          </li>
          <li className={styles.social}>
            <img
              src='/icons/icon-google.svg'
              alt='Google'
              className={styles.socialIcon}
            />
            <p style={{ color: '#EA4335' }}>Google</p>
          </li>
          <li className={styles.social}>
            <img
              src='/icons/icon-microsoft.svg'
              alt='Microsoft'
              className={styles.socialIcon}
            />
            <p style={{ color: '#000000' }}>Microsoft</p>
          </li>
        </ul>
      </form>
      <img
        className={styles.Image}
        src='/assets/img-login.png'
        alt='SkillBoost'
      />
    </div>
  )
}

export default Login
