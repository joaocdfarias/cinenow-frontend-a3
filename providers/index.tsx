'use client'

import React, { PropsWithChildren } from 'react'
import { AuthProvider } from '../contexts/auth'

export default function Providers({ children }: PropsWithChildren) {
  return <AuthProvider> {children} </AuthProvider>
}
