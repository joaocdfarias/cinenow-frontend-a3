import React from 'react'
import styles from './card.module.css'

interface ICardProps {
  children: React.ReactNode
}

const Card = ({ children }: ICardProps) => {
  return <div className={styles.card}>{children}</div>
}

export default Card
