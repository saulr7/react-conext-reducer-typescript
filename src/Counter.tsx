import React, { useReducer } from 'react'
import countReducer from './context/countReducer';

const Counter: React.FC = () => {

  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })} > ADD </button>
      {state.count}
      <button onClick={() => dispatch({ type: 'SUB', payload: -1 })} > SUB </button>
    </div>
  )
}

export default Counter