'use cliet'

import React, { InputHTMLAttributes, forwardRef } from 'react'
import styles from './input.module.css'
import { UseFormRegister } from 'react-hook-form'
import { ISignUpFormValues } from '../../app/signup/page'
import Image from 'next/image'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  inputSize?: 'default' | 'large'
  register?: UseFormRegister<ISignUpFormValues>
}

const Input = forwardRef<HTMLInputElement, IInputProps>(function Input(
  { id, error, label, required, className, inputSize, ...rest },
  ref
) {
  const isFile = rest.type === 'file'
  return (
    <div className={styles.wrapper}>
      {isFile && label ? (
        <label
          className={`${styles.label} ${isFile ? styles.fileLabel : ''}`}
          htmlFor={id}
        >
          {label}
          <div className={styles.file}>
            <Image
              src="/images/upload.svg"
              width={44}
              height={44}
              alt="Upload button"
            />
            <p>Fazer upload</p>
          </div>
        </label>
      ) : (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`${styles.input} ${styles[inputSize!]} ${
          isFile ? styles.hidden : ''
        }`}
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
