import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import Logo from '../Logo'
import { ILinks } from '../../types'

const socialLinks: ILinks[] = [
  { name: 'Facebook', url: '' },
  { name: 'Twitter', url: '' },
  { name: 'Instagram', url: '' },
  { name: 'TikTok', url: '' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <div className={styles.navItems}>
          <div>
            <p className={styles.title}>Redes sociais</p>
            <ul className={styles.list}>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link className={styles.link} href={link.url}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.title}>Filmes</p>
            <ul className={styles.list}>
              <Link className={styles.link} href="">
                <li>Em breve</li>
              </Link>
              <Link className={styles.link} href="">
                <li>Em cartaz</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className={styles.title}>Precisa de ajuda?</p>
            <ul className={styles.list}>
              <Link className={styles.link} href="">
                <li>FAQ</li>
              </Link>
              <Link className={styles.link} href="">
                <li>Fale conosco</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Logo />
    </footer>
  )
}

export default Footer
