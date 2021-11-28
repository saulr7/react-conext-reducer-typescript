import { useReducer } from 'react';
import TodoContext from './context/todoContext';

import todoReducer from './context/todoReducer';
import Counter from './Counter';
import Todos from './Todos';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <div className="bg-gray-100 min-h-screen min-w-full text-center pt-10">

      <Counter />

      <TodoContext.Provider value={{ state, dispatch }}>

        <Todos />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
