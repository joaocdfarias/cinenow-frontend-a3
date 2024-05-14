import React, { ButtonHTMLAttributes, HTMLProps } from 'react'
import styles from './button.module.css'

type TVariants = 'contained' | 'outlined' | 'secondary'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: TVariants
  fill?: boolean
  size?: 'large' | 'default'
}

const Button = ({ children, variant, fill, size }: IButtonProps) => {
  return (
    <button
      style={{
        width: fill ? '100%' : 'unset',
        textAlign: fill ? 'center' : 'unset',
      }}
      className={`${styles.button} ${styles[variant]} ${styles[size!]}`}
    >
      {children}
    </button>
  )
}

export default Button
