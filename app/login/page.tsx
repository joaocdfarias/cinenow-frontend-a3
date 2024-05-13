/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Card from '../../components/Card'
import Logo from '../../components/Logo'
import styles from './page.module.css'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login() {
  return (
    <main className={styles.container}>
      <Card>
        <div className={styles.login}>
          <img
            className={styles.image}
            src="/images/image2.jpg"
            alt="Interstellar"
          />
          <div className={styles.section}>
            <Logo className={styles.logo} />
            <div className={styles.inputSection}>
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
                <Link
                  className={styles.forgotPassword}
                  href="/recover-password"
                >
                  Esqueci a senha
                </Link>
              </div>
              <Button variant="contained" fill>
                Entrar
              </Button>
            </div>
            <div className={styles.signUp}>
              <p>Não tem uma conta?</p>
              <Link href="/signup"> Cadastre-se </Link>
            </div>
          </div>
        </div>
      </Card>
    </main>
  )
}
