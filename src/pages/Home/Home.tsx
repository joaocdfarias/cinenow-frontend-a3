import { useTodos } from '../../services/queries/useTodos'

export const Home = () => {
  const { data } = useTodos()

  return (
    <>
      <h1>Home</h1>
      <h2>Todos</h2>
      <ul>
        {data?.map((todo) => {
          return <li key={todo.id}> {todo.title} </li>
        })}
      </ul>
    </>
  )
}
