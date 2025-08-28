'use client'
import { Bell, Heart, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
interface HeaderProps {
  isAuthenticated: boolean
}

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Image
            className={styles.headerLogoIcon}
            src='/assets/icon-logo.png'
            alt='SkillBoost'
            width={20}
            height={30}
          />
          <Link className={styles.headerLogoText} href='/'>
            SkillBoost
          </Link>
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
        <Link href='/mentors' className={styles.headerTeach}>
          Teach on SkillBoost
        </Link>
        <div className={styles.headerActions}>
          {isAuthenticated ? (
            <div className={styles.headerIcons}>
              <Heart className={styles.headerIcon} color='#64748B' />
              <Link href='/cart'>
                <ShoppingCart className={styles.headerIcon} color='#64748B' />
              </Link>
              <Bell className={styles.headerIcon} color='#64748B' />
              <Link className={styles.headerIconProfile} href='/profile'>
                J
              </Link>
            </div>
          ) : (
            <div className={styles.headerAuth}>
              <Link href='/cart'>
                <ShoppingCart className={styles.headerIcon} color='#64748B' />
              </Link>
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
