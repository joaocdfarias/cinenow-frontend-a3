import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../Container/Container'
import './style.css'

interface NavItems {
  text: string
  link: string
}
interface ILayoutProps {
  children: React.ReactNode
  navItems: NavItems[]
}

export const Layout = ({ children, navItems }: ILayoutProps) => {
  return (
    <>
      <header>
        <Container>
          <h1>Logo</h1>
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.text}>
                  <NavLink to={item.link}>{item.text}</NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </>
  )
}
