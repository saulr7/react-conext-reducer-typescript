enum CountActionKind {
  ADD = 'ADD',
  SUB = 'SUB',
}

type Action =
  | { type: 'ADD'; payload: number }
  | { type: 'SUB'; payload: number };

interface State {
  count: number;
}

export const initialState = {
  count: 0,
};

const countReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case CountActionKind.ADD:
      return {
        ...state, count: state.count + 1,
      };
    case CountActionKind.SUB:
      return {
        ...state, count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
