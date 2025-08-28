import { ArrowRight } from 'lucide-react'
import styles from './Registration.module.scss'
import Image from 'next/image'
import { InputField } from '@/shared/ui/Input/Input'
export default function Registration() {
  return (
    <div className={styles.SignUp}>
      <div className={styles.Image}>
        <Image
          src='/assets/img-signup.png'
          alt='SkillBoost'
          width={625}
          height={934}
        />
      </div>
      <div className={styles.container}>
        <h2 className={styles.containerTitle}>Create Your Account</h2>
        <div className={styles.containerLine}>
          <div className={styles.block}>
            <div className={styles.blockFlex}>
              <InputField
                label='First Name'
                placeholder='First Name'
                required={true}
              />
              <InputField
                label='Last Name'
                placeholder='Last Name'
                required={true}
              />
            </div>
          </div>
        </div>

        <InputField label='Username' placeholder='User' required={true} />
        <InputField label='Email' placeholder='Email' required={true} />

        <div className={styles.containerLine}>
          <InputField
            label='Password'
            placeholder='Enter Password'
            type='password'
            required={true}
          />
          <InputField
            label='Password'
            placeholder='Confirm Password'
            type='password'
            required={true}
          />
        </div>

        <button type='submit' className={styles.Button}>
          <span>Sign Up</span>
          <ArrowRight size={18} />
        </button>

        <div className={styles.signWith}>
          <div className={styles.signWithLine}></div>
          <p className={styles.signWithText}>Sign up with</p>
          <div className={styles.signWithLine}></div>
        </div>

        <ul className={styles.socialsLine}>
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
    </div>
  )
}
