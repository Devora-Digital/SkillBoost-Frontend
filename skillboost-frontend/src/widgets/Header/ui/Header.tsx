import { Bell, Heart, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'
interface HeaderProps {
  isAuthenticated: boolean
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <img
            className={styles.headerLogoIcon}
            src='/icons/icon-logo.png'
            alt='Byway'
          />
          <p className={styles.headerLogoText}>Byway</p>
        </div>
        <nav className={styles.headerNav}>
          <Link className={styles.headerNavLink} href='/categories'>
            Categories
          </Link>
        </nav>
        <div className={styles.headerSearch}>
          <label className={styles.headerSearchLabel}>
            <Search color='#64748B' size={17} />
            <input
              className={styles.headerSearchInput}
              type='text'
              placeholder='Search courses'
              aria-label='Search courses'
            />
          </label>
        </div>
        <span className={styles.headerTeach}>Teach on Byway</span>
        <div className={styles.headerActions}>
          {isAuthenticated ? (
            <div className={styles.headerIcons}>
              <Heart className={styles.headerIcon} color='#64748B' />
              <ShoppingCart className={styles.headerIcon} color='#64748B' />
              <Bell className={styles.headerIcon} color='#64748B' />
              <div className={styles.headerIconProfile}>J</div>
            </div>
          ) : (
            <div className={styles.headerAuth}>
              <ShoppingCart className={styles.headerIcon} color='#64748B' />
              <Link href='/login'>
                <button className={styles.headerAuthLogin}>Log In</button>
              </Link>
              <Link href='/signup'>
                <button className={styles.headerAuthSignup}>Sign Up</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
