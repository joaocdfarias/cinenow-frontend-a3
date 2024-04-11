import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface IReactRouterProvider {
  children: React.ReactNode
}

export const ReactRouterProvider = ({ children }: IReactRouterProvider) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
