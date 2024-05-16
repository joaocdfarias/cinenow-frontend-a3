'use cliet'

import React, { InputHTMLAttributes, forwardRef } from 'react'
import styles from './input.module.css'
import { UseFormRegister } from 'react-hook-form'
import { ISignUpFormValues } from '../../app/signup/page'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  inputSize?: 'default' | 'large'
  register?: UseFormRegister<ISignUpFormValues>
}

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { id, error, label, required, className, inputSize, ...rest },
  ref
) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={`${styles.input} ${styles[inputSize!]}`}
        ref={ref}
        id={id}
        name={id}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
})

export default Input
