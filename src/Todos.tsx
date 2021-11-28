import React, { useContext, useState } from 'react';
import TodoContext from './context/todoContext';

const Todos: React.FC = () => {
  const [todo, setTodo] = useState('');

  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="text-center bg-gray-50 p-10 mt-4 mx-28 rounded-2xl shadow-md ">
      <h1 className="text-center text-4xl font-bold mb-4">
        Todos:
      </h1>

      <input
        type="text"
        onChange={({ target }) => setTodo(target.value)}
        className="bg-gray-200 rounded-md m-1 p-1"
      />
      <button
        type="button"
        onClick={() => dispatch({ type: 'ADD', payload: { todo, completed: false } })}
        className="bg-blue-800 text-white px-2 rounded-lg py-1"
      >
        Add

      </button>

      {
        state.todos.map((_todo, idx) => (
          <div className=" m-2 p-2  flex justify-between">

            <p className="inline x-2 px-2">
              <span>{`${idx + 1})  `}</span>
              <h3 className="inline text-xl">
                {_todo.todo}
              </h3>
            </p>
            <button
              type="button"
              onClick={() => dispatch({ type: 'REMOVE', payload: { todo: _todo.todo } })}
              className="bg-red-700 text-white p-0.5 rounded-md px-2"
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
