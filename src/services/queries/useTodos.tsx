import { useQuery } from 'react-query'
import TodoClient from '../clients/todo-client'

interface ITodos {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useTodos = () => {
  const queryKey = 'useTodos'

  const getTodos = async () => {
    const response = await TodoClient.get<ITodos[]>('/todos')
    return response.data
  }

  const { data, isError, isLoading, error } = useQuery(queryKey, getTodos)

  return { data, isError, isLoading, error }
}
