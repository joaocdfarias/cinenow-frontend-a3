import React from 'react'
import styles from './button.module.css'

interface IButtonProps {
  children: React.ReactNode
  variant: 'contained' | 'outlined'
  fill?: boolean
}

const Button = ({ children, variant, fill }: IButtonProps) => {
  return (
    <button
      style={{
        width: fill ? '100%' : 'unset',
        textAlign: fill ? 'center' : 'unset',
      }}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  )
}

export default Button
