'use client'

import React from 'react'
import styles from './page.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Link from 'next/link'

export default function RecoverPassword() {
  return (
    <main className={styles.container}>
      <Card className={styles.card}>
        <p className={styles.title}>Recuperação de senha</p>
        <div>
          <Input
            label="E-mail"
            inputSize="large"
            placeholder="Insira seu e-mail"
            type="email"
            id="email"
          />
          <p className={styles.message}>
            Lembre-se de verificar sua caixa de spam.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link className={styles.link} href="/login">
            <Button variant="secondary" fill size="large">
              Voltar
            </Button>
          </Link>
          <Link className={styles.link} href="/email-sent">
            <Button variant="contained" fill size="large">
              Enviar link
            </Button>
          </Link>
        </div>
      </Card>
    </main>
  )
}
