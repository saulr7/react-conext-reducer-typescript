import React, { useContext, useState } from 'react'
import TodoContext from './context/todoContext'

const Todos: React.FC = () => {

  const [todo, setTodo] = useState("")

  const { state, dispatch } = useContext(TodoContext);

  return (
    <div>

      <input type="text" onChange={({ target }) => setTodo(target.value)} />
      <button onClick={() => dispatch({ type: 'ADD', payload: { todo, completed: false } })} >ADd</button>
      <h3>{todo}</h3>

      {
        state.todos.map(todo => {

          return <div>

            <p>{todo.todo} - {todo.completed} </p>
            <button onClick={() => dispatch({ type: 'REMOVE', payload: { todo: todo.todo } })} > Remove </button>

          </div>

        })
      }

    </div >
  )
}

export default Todos
