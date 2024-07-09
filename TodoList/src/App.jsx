import { useState } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import { useEffect } from 'react'
import TodoForm from './Components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }


  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((item) => ( item.id === todo.id ? todo : prev )))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item)=>(item.id !== id )))
  }

  const toggleTodo = (id)=>{
    setTodos((prev)=> prev.map((item)=>(item.id === id ? {...item,completed: !item.completed}: item)))
  }


  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
    
  },[])


  useEffect(()=>{
    localStorage.setItem("todos"  , JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div>
        <TodoForm/>
      </div>
    </TodoProvider>
  )
}

export default App
