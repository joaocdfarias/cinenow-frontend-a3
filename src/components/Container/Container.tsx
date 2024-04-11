import React from 'react'
import  './style.css'

interface IContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return <div className={'container'}>{children}</div>
}
