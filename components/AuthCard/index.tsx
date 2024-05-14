import React, { HTMLProps } from 'react'
import Card from '../Card'
import styles from './authcard.module.css'
import Logo from '../Logo'
import Image from 'next/image'

interface IAuthCardProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const AuthCard = ({ children, ...props }: IAuthCardProps) => {
  return (
    <div {...props}>
      <Card style={{ maxHeight: '730px' }}>
        <div className={styles.login}>
          <Image
            className={styles.image}
            src="/images/image2.jpg"
            alt="Interstellar"
            width={1920}
            height={1080}
          />
          <div className={styles.section}>
            <Logo />
            {children}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AuthCard
