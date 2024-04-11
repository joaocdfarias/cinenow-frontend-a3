import axios from 'axios'

const TodoClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export default TodoClient
