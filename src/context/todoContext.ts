import React, { useState, useEffect, createContext } from 'react';
import { ActionTodos } from './todoReducer';

interface ITodoContext {
  todos: []
}

interface defaultState {

  todos: { todo: string, completed: boolean }[]

}


export const TodoContext = createContext<{ state: defaultState; dispatch: React.Dispatch<ActionTodos>; }>(
  { state: { todos: [] }, dispatch: () => null }
);

export default TodoContext;