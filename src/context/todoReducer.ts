export type ActionTodos =
  | { type: 'ADD', payload: { todo: string, completed: boolean } }
  | { type: 'REMOVE', payload: { todo: string } };

interface State {

  todos: { todo: string, completed: boolean }[]

}

const todoReducer = (state: State, action: ActionTodos): State => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        todos: [
          ...state.todos,
          { todo: payload.todo, completed: false },
        ],
      };
    case 'REMOVE':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.todo !== payload.todo),

      };

    default:
      return state;
  }
};

export default todoReducer;
