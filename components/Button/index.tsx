import React, { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

type TVariants = 'contained' | 'outlined' | 'secondary' | 'disabled'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant: TVariants
  fill?: boolean
  size?: 'large' | 'default'
}

const Button = ({
  children,
  variant,
  fill,
  size,
  disabled,
  ...props
}: IButtonProps) => {
  return (
    <button
      style={{
        width: fill ? '100%' : 'unset',
        textAlign: fill ? 'center' : 'unset',
      }}
      className={`${styles.button} ${styles[variant]} ${styles[size!]} ${
        disabled ? styles.disabled : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
