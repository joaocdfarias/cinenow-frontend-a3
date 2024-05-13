import React, { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, id, type, placeholder }: IInputProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input
