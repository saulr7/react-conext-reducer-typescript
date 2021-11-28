import React, { useContext, useState } from 'react';
import TodoContext from './context/todoContext';

const Todos: React.FC = () => {
  const [todo, setTodo] = useState('');

  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="text-center bg-gray-50 p-10 m-10 rounded-2xl shadow-md">

      <input
        type="text"
        onChange={({ target }) => setTodo(target.value)}
        className="bg-gray-200 rounded-md m-1 py-1"
      />
      <button
        type="button"
        onClick={() => dispatch({ type: 'ADD', payload: { todo, completed: false } })}
        className="bg-blue-400 text-white px-2 rounded-lg py-1"
      >
        Add

      </button>

      {
        state.todos.map((_todo) => (
          <div className=" m-2 p-2">

            <p className="inline mx-2 px-2">
              <h3 className="inline text-xl">
                {_todo.todo}

              </h3>
              -
              {_todo.completed}
            </p>
            <button
              type="button"
              onClick={() => dispatch({ type: 'REMOVE', payload: { todo: _todo.todo } })}
              className="bg-red-700 text-white px-1 rounded-lg py-1"
            >
              Remove
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default Todos;
