import React, { createContext } from 'react';
import { ActionTodos } from './todoReducer';

interface DefaultState {

  todos: { todo: string, completed: boolean }[]

}

const TodoContext = createContext<{
  state: DefaultState; dispatch: React.Dispatch<ActionTodos>
}>(
  { state: { todos: [] }, dispatch: () => null },
);

export default TodoContext;
