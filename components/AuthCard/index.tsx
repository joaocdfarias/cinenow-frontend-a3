import React, { PropsWithChildren } from 'react'
import Card from '../Card'
import styles from './authcard.module.css'
import Logo from '../Logo'
import Image from 'next/image'

const AuthCard = ({ children }: PropsWithChildren) => {
  return (
    <Card style={{ maxHeight: '730px' }}>
      <div className={styles.login}>
        <Image
          className={styles.image}
          src="/images/image2.jpg"
          alt="Interstellar"
          width={1920}
          height={1080}
          priority
        />
        <div className={styles.section}>
          <Logo />
          {children}
        </div>
      </div>
    </Card>
  )
}

export default AuthCard
