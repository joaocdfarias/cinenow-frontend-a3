'use client'

import Link from 'next/link'
import AuthCard from '../../components/AuthCard'
import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './page.module.css'

import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../contexts/auth'

const SignUpSchema = z
  .object({
    name: z.string().min(1, { message: 'Campo obrigatório' }),
    email: z
      .string()
      .trim()
      .min(1, { message: 'Campo obrigatório' })
      .email({ message: 'E-mail inválido' }),
    password: z
      .string()
      .min(8, { message: 'Sua senha deve ter pelo menos 8 caractéres' })
      .regex(/[a-z]/, 'Sua senha deve conter pelo menos 1 letra minúscula')
      .regex(/[A-Z]/, 'Sua senha deve conter pelo menos 1 letra maiúscula')
      .regex(/\d/, 'Sua senha deve conter pelo menos 1 número'),
    repeatPassword: z.string(),
  })
  .superRefine(({ password, repeatPassword }, ctx) => {
    if (password !== repeatPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['repeatPassword'],
      })
    }
  })

export interface ISignUpFormValues extends z.infer<typeof SignUpSchema> {}

const defaultValues: ISignUpFormValues = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUpFormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  })

  const { push } = useRouter()
  const { signup } = useAuth()

  const onSubmit = (data: ISignUpFormValues) => {
    try {
      signup(data.email, data.password)
      push('/login')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className={styles.container}>
      <AuthCard>
        <form className={styles.inputSection} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Seu nome"
            error={errors.name?.message}
            {...register('name')}
          />
          <Input
            id="email"
            label="E-mail"
            type="email"
            placeholder="Seu e-mail"
            autoComplete="username"
            error={errors.email?.message}
            {...register('email')}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            autoComplete="current-password"
            error={errors.password?.message}
            {...register('password')}
          />
          <Input
            id="repeatPassword"
            label="Repetir senha"
            type="password"
            autoComplete="new-password"
            error={errors.repeatPassword?.message}
            {...register('repeatPassword')}
          />
          <Button variant="contained" fill disabled={isSubmitting}>
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
          </Button>
        </form>
        <div className={styles.login}>
          <p>Já tem uma conta?</p>
          <Link href="/login"> Faça o login </Link>
        </div>
      </AuthCard>
    </main>
  )
}
