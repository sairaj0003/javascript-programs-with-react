import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FibonacciGenerator = () => {
  const navigate = useNavigate();
  const [inputNumber, setInputNumber] = useState();
  const [fibonacciSequence, setFibonacciSequence] = useState();
  
  const generateFibonacci = (num) => {
    if (!(/^\d+$/.test(num))) {
      setFibonacciSequence('Please enter a valid number!');
      return;
    }

    if (num === '0') {
      setFibonacciSequence([0]);
      return;
    }

    const fibSequence = [0, 1];

    for (let i = 2; ; i++) {
      let fibNum = fibSequence[i - 1] + fibSequence[i - 2];
      if (fibNum <= num) {
        fibSequence.push(fibNum);
      } else {
        break;
      }
    }

    setFibonacciSequence(fibSequence);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    generateFibonacci(inputNumber);
  };

  return (
    <>
    <div className='App'>
      <h1>Fibonacci Sequence Generator</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a number' onChange={(e) => setInputNumber(e.target.value)} />
        <button type='submit'>Generate Fibonacci</button>
      </form>

      { 
        fibonacciSequence &&
          Array.isArray(fibonacciSequence) ? (
            <h3>{ fibonacciSequence.join(", ") }</h3>
          ) : (
            <h3>{ fibonacciSequence }</h3>
          )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default FibonacciGenerator