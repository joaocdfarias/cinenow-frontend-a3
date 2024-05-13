import React from 'react'

import Link from 'next/link'

import styles from './header.module.css'

import Button from '../Button'
import Logo from '../Logo'
import { ILinks } from '../../types'

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
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.name} className={styles.link} href={link.url}>
            {link.name}
          </Link>
        ))}
        <Link href="/login">
          <Button variant="contained"> Login </Button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
