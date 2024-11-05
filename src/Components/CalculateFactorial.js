import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CalculateFactorial = () => {
  const navigate = useNavigate();
  const [inputNumber, setInputNumber] = useState(null);
  const [factorial, setFactorial] = useState(null);
  const [num, setNum] = useState(0);
  
  const calculateFactorial = (num) => {
    if (!(/^\d+$/.test(num))) {
      setFactorial('Please enter a valid number!');
      return;
    }

    setNum(num);

    if (num === '0' || num === '1') {
      setFactorial(1);
      return;
    }

    let result = 1;

    for (let i = 2; i <= parseInt(num, 10); i++) {
      result *= i;
    }

    setFactorial(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateFactorial(inputNumber);
  };

  return (
    <>
    <div className='App'>
      <h1>Factorial Calculator</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a number' onChange={(e) => setInputNumber(e.target.value)} />
        <button type='submit'>Calculate Factorial</button>
      </form>

      { 
        (factorial || factorial===0) && (
          typeof factorial === 'string' ? (
            <h3>{ factorial }</h3>
          ) : (
            <h3>Factorial of { num } is { factorial }</h3>
          )
        )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default CalculateFactorial