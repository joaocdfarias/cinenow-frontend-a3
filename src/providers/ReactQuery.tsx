import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface IReactQueryProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()

export const ReactQuery = ({ children }: IReactQueryProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
