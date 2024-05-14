'use client'

import React from 'react'
import styles from './page.module.css'
import Card from '../../components/Card'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useRouter } from 'next/navigation'

export default function RecoverPassword() {
  const { back } = useRouter()

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
          <Button variant="secondary" fill size="large" onClick={() => back()}>
            Voltar
          </Button>
          <Button variant="contained" fill size="large">
            Enviar link
          </Button>
        </div>
      </Card>
    </main>
  )
}
