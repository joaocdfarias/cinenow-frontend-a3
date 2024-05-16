import React from 'react'
import styles from './page.module.css'
import Card from '../../components/Card'
import Button from '../../components/Button'
import Link from 'next/link'

export default function EmailSent() {
  return (
    <main className={styles.container}>
      <Card className={styles.wrapper}>
        <p className={styles.text}>
          Um e-mail foi enviado para a redefinição da senha.
        </p>
        <Link href="/">
          <Button variant="contained">Voltar para página inicial</Button>
        </Link>
      </Card>
    </main>
  )
}
