import styles from './Login.module.scss'

const Login = () => {
  return (
    <div className={styles.Container}>
      <form className={styles.Form}>
        <h2 className={styles.H2}>Sign in to your account</h2>
        <div>
          <h5 className={styles.H5}>Email</h5>
          <input
            className={styles.Input}
            type='text'
            placeholder='Username or Email ID'
          />
        </div>
        <div>
          <h5 className={styles.H5}>Password</h5>
          <input
            className={styles.Input}
            type='text'
            placeholder='Enter Password'
          />
        </div>
        <button className={styles.Button}>Sign In</button>

        <div className={styles.SignWith}>
          <div className={styles.SignWith__line}></div>
          <p className={styles.SignWith__text}>Sign up with</p>
          <div className={styles.SignWith__line}></div>
        </div>

        <div className={styles.SocialsLine}>
          <div className={styles.Social}>
            <img src='/icons/icon-fb.svg' alt='Facebook' />
            <p style={{ color: '#0866FF' }}>Facebook</p>
          </div>
          <div className={styles.Social}>
            <img src='/icons/icon-google.svg' alt='Google' />
            <p style={{ color: '#EA4335' }}>Google</p>
          </div>
          <div className={styles.Social}>
            <img src='/icons/icon-microsoft.svg' alt='Microsoft' />
            <p style={{ color: '#000000' }}>Microsoft</p>
          </div>
        </div>
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
