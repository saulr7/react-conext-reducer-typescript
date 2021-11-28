import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import TodoContext from './context/todoContext';
import todoReducer from './context/todoReducer';
import Counter from './Counter';
import Todos from './Todos';

const App: React.FC = () => {

  const [state, dispatch] = useReducer(todoReducer, { todos: [] })

  return (

    <div>

      <h1>Counter:</h1>

      <Counter />

      <TodoContext.Provider value={{ state, dispatch }}>
        <h1>Todos:</h1>
        <Todos />
      </TodoContext.Provider>
    </div >

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
