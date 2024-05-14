import Link from 'next/link'
import Input from '../../components/Input'
import Button from '../../components/Button'
import AuthCard from '../../components/AuthCard'

import styles from './page.module.css'

export default function Login() {
  return (
    <main className={styles.container}>
      <AuthCard>
        <form className={styles.inputSection}>
          <Input
            label="E-mail"
            id="email"
            type="email"
            placeholder="exemplo@email.com"
          />
          <div className={styles.passwordSection}>
            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="Insira sua senha"
            />
            <Link className={styles.forgotPassword} href="/recover-password">
              Esqueci a senha
            </Link>
          </div>
          <Button variant="contained" fill>
            Entrar
          </Button>
        </form>
        <div className={styles.signUp}>
          <p>Não tem uma conta?</p>
          <Link href="/signup"> Cadastre-se </Link>
        </div>
      </AuthCard>
    </main>
  )
}
