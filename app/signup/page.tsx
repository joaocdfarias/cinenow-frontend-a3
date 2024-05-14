'use client'

import Link from 'next/link'
import AuthCard from '../../components/AuthCard'
import Button from '../../components/Button'
import Input from '../../components/Input'

import styles from './page.module.css'

import { z } from 'zod'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

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
      .min(8, { message: 'Sua senha deve ter pelo menos 8 caractéres' }),
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

export default function Signup() {
  const {
    register,
    formState: { errors },
  } = useForm<ISignUpFormValues>({
    mode: 'onChange',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(SignUpSchema),
  })

  console.log(errors)

  return (
    <main className={styles.container}>
      <AuthCard>
        <form className={styles.inputSection}>
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
          <Button variant="contained" fill>
            Cadastrar
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
