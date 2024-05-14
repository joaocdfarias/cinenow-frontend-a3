import React, { HTMLProps } from 'react'
import styles from './card.module.css'

interface ICardProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

const Card = ({ children, className, ...props }: ICardProps) => {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
