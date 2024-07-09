import React from 'react'
import useTodo from '../Contexts/TodoContext'

const TodoItem = ({todo}) => {

    const {updateTodo,deleteTodo,toggleTodo} = useTodo()

  return (
    <div>
      item
    </div>
  )
}

export default TodoItem
