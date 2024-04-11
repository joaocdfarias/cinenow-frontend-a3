import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Layout } from '..'
import { Providers } from '../../providers/Providers'

describe('Layout', () => {
  it('should render nav items', () => {
    const navItems = [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about',
      },
      {
        text: 'Contact',
        link: '/contact',
      },
    ]

    render(
      <Providers>
        <Layout navItems={navItems}>
          <h1>Hello World</h1>
        </Layout>
      </Providers>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })
})
