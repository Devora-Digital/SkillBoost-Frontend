import Link from 'next/link'
import React from 'react'
interface HeaderProps {
  isAuthenticated: boolean
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated }) => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src='/icons/icon-logo.png' alt='Byway' />
        <p>Byway</p>
      </div>
      <Link href='/categories'>Categories</Link>
      <input type='text' placeholder='Search courses' />
      <span>Teach on Byway</span>

      {isAuthenticated ? (
        <div></div>
      ) : (
        <div>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      )}
      <p>Teach on Byway</p>
    </header>
  )
}

export default Header
