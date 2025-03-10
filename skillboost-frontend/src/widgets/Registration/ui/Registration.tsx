import styles from './Registration.module.scss'

export default function Registration() {
  return (
    <div className='container'>
      <div className={styles.SignUp}>
        <div className={styles.LeftSide}>
          <img src='/assets/img-signup.png' alt='SkillBoost' />
        </div>
        <div className={styles.RightSide}>
          <h2 className={styles.H2}>Create Your Account</h2>

          <div className={styles.Line}>
            <div className={styles.Block}>
              <h5 className={styles.H5}>Full Name</h5>
              <div className={styles.Flex}>
                <input
                  className={styles.Input}
                  type='text'
                  placeholder='First Name'
                />
                <input
                  className={styles.Input}
                  type='text'
                  placeholder='Last Name'
                />
              </div>
            </div>
          </div>

          <div className={styles.Block}>
            <h5 className={styles.H5}>Username</h5>
            <input
              type='text'
              placeholder='Username'
              className={styles.Input}
            />
          </div>

          <div className={styles.Block}>
            <h5 className={styles.H5}>Email</h5>
            <input
              type='email'
              placeholder='Email ID'
              className={styles.Input}
            />
          </div>

          <div className={styles.Line}>
            <div className={styles.Block}>
              <h5 className={styles.H5}>Password</h5>
              <input
                className={styles.Input}
                type='password'
                placeholder='Enter Password'
              />
            </div>
            <div className={styles.Block}>
              <h5 className={styles.H5}>Confirm Password</h5>
              <input
                className={styles.Input}
                type='password'
                placeholder='Confirm Password'
              />
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button className={styles.Button}>Create Account</button>
          </div>

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
        </div>
      </div>
    </div>
  )
}
