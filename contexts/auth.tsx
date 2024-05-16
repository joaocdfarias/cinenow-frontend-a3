import {
  createContext,
  useContext,
  useState,
  useEffect,
  PropsWithChildren,
} from 'react'
import { AuthService, User } from '../services/auth'

const authService = new AuthService()

interface AuthContextProps {
  currentUser: User | null
  login: (
    email: string,
    password: string
  ) => { success: boolean; message: string }
  signup: (
    email: string,
    password: string
  ) => { success: boolean; message: string }
  logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const user = authService.getCurrentUser()
    setCurrentUser(user)
  }, [])

  const login = (
    email: string,
    password: string
  ): { success: boolean; message: string } => {
    const result = authService.login(email, password)

    if (!result.success) {
      throw new Error('User not found')
    }

    if (result.success) {
      setCurrentUser(authService.getCurrentUser())
    }
    return result
  }

  const signup = (
    email: string,
    password: string
  ): { success: boolean; message: string } => {
    const result = authService.signup(email, password)

    if (!result.success) {
      throw new Error('Email is already taken')
    }

    return result
  }

  const logout = () => {
    authService.logout()
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
