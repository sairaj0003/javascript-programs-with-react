import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Counter = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.preventDefault();

    setCount(count + 1);
  }

  const decrement = (e) => {
    e.preventDefault();

    setCount(count - 1);
  }

  const reset = (e) => {
    e.preventDefault();

    setCount(0);
  }

  return (
    <>
    <div className='App'>
      <h1>Counter App</h1>

      <h2>{ count }</h2>

      <div>
        <button id='inc' onClick={increment}>Increment</button>
        <button id='dec' onClick={decrement}>Decrement</button>
        <button id='res' onClick={reset}>Reset</button>
        <button onClick={() => navigate('/')}>Back</button>
      </div>

    </div>
    </>
  )
}

export default Counter