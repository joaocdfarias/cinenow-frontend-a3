'use client'

import Link from 'next/link'
import Input from '../../components/Input'
import Button from '../../components/Button'
import AuthCard from '../../components/AuthCard'

import styles from './page.module.css'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/auth'

const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: 'Campo obrigatório' })
    .email({ message: 'E-mail inválido' }),
  password: z.string().min(1, { message: 'Campo obrigatório' }),
})

export interface ILoginFormValues extends z.infer<typeof LoginSchema> {}

const defaultValues: ILoginFormValues = {
  email: '',
  password: '',
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(LoginSchema),
    defaultValues,
  })

  const { push } = useRouter()
  const { login } = useAuth()

  const onSubmit = async (data: ILoginFormValues) => {
    try {
      login(data.email, data.password)
      push('/details')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className={styles.container}>
      <AuthCard>
        <form className={styles.inputSection} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail"
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            error={errors.email?.message}
            {...register('email')}
          />
          <div className={styles.passwordSection}>
            <Input
              label="Senha"
              id="password"
              type="password"
              placeholder="Insira sua senha"
              error={errors.password?.message}
              {...register('password')}
            />
            <Link className={styles.forgotPassword} href="/recover-password">
              Esqueci a senha
            </Link>
          </div>
          <Button variant="contained" fill disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
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
