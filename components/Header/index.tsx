'use client'

import React from 'react'

import Link from 'next/link'

import styles from './header.module.css'

import Button from '../Button'
import Logo from '../Logo'
import { ILinks } from '../../types'
import { useAuth } from '../../contexts/auth'
import { useRouter } from 'next/navigation'

const navLinks: ILinks[] = [
  {
    name: 'Em cartaz',
    url: '#showing',
  },
  {
    name: 'Em breve',
    url: '#soon',
  },
  {
    name: 'Contato',
    url: '/contato',
  },
]

const Header = () => {
  const { currentUser, logout } = useAuth()
  const { push } = useRouter()

  const handleClick = () => {
    if (currentUser) {
      logout()
      push('/login')
    } else {
      push('/login')
    }
  }

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.name} className={styles.link} href={link.url}>
            {link.name}
          </Link>
        ))}
        <Button variant="contained" onClick={handleClick}>
          {currentUser ? 'Logout' : 'Login'}
        </Button>
      </nav>
    </header>
  )
}

export default Header
