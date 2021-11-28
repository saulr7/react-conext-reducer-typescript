import React, { useReducer } from 'react';
import countReducer from './context/countReducer';

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className="text-center bg-gray-50 p-10 pt-10 mx-28 rounded-2xl shadow-md ">

      <h1 className="text-center text-4xl font-bold mb-4">
        Counter:
      </h1>
      <button
        type="button"
        className="bg-yellow-700 text-white p-2 px-4 mx-6 rounded-md"
        onClick={() => dispatch({ type: 'SUB', payload: -1 })}
      >
        -
      </button>
      <p className="inline text-xl font-black">
        {state.count}
      </p>
      <button
        type="button"
        className="bg-yellow-700 text-white p-2 px-4 mx-6 rounded-md"
        onClick={() => dispatch({ type: 'ADD', payload: 1 })}
      >
        +
      </button>

    </div>
  );
};

export default Counter;
