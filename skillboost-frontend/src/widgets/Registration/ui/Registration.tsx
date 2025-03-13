import { ArrowRight } from 'lucide-react'
import styles from './Registration.module.scss'

export default function Registration() {
  return (
    <div className='container'>
      <div className={styles.SignUp}>
        <div className={styles.Image}>
          <img src='/assets/img-signup.png' alt='SkillBoost' />
        </div>
        <div className={styles.container}>
          <h2 className={styles.containerTitle}>Create Your Account</h2>
          <div className={styles.containerLine}>
            <div className={styles.block}>
              <h5 className={styles.blockTitle}>Full Name</h5>
              <div className={styles.blockFlex}>
                <input
                  className={styles.blockInput}
                  type='text'
                  placeholder='First Name'
                />
                <input
                  className={styles.blockInput}
                  type='text'
                  placeholder='Last Name'
                />
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h5 className={styles.blockTitle}>Username</h5>
            <input
              type='text'
              placeholder='Username'
              className={styles.blockInput}
            />
          </div>

          <div className={styles.block}>
            <h5 className={styles.blockTitle}>Email</h5>
            <input
              type='email'
              placeholder='Email ID'
              className={styles.blockInput}
            />
          </div>

          <div className={styles.containerLine}>
            <div className={styles.block}>
              <h5 className={styles.blockTitle}>Password</h5>
              <input
                className={styles.blockInput}
                type='password'
                placeholder='Enter Password'
              />
            </div>
            <div className={styles.block}>
              <h5 className={styles.blockTitle}>Confirm Password</h5>
              <input
                className={styles.blockInput}
                type='password'
                placeholder='Confirm Password'
              />
            </div>
          </div>

          <button type='submit' className={styles.Button}>
            <span>Sign Up</span>
            <ArrowRight />
          </button>

          <div className={styles.signWith}>
            <div className={styles.signWithLine}></div>
            <p className={styles.signWithText}>Sign up with</p>
            <div className={styles.signWithLine}></div>
          </div>

          <ul className={styles.socialsLine}>
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
        </div>
      </div>
    </div>
  )
}
