import React from 'react'
import { ReactRouterProvider } from './ReactRouter'
import { ReactQuery } from './ReactQuery'

interface IProviders {
  children: React.ReactNode
}

export const Providers = ({ children }: IProviders) => {
  return (
    <ReactRouterProvider>
      <ReactQuery>{children}</ReactQuery>
    </ReactRouterProvider>
  )
}
