import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PrimeChecker = () => {
  const navigate = useNavigate();
  const [number, setNumber] = useState();
  const [result, setResult] = useState('');
  const [checked, setChecked] = useState(false);
  
  const isPrime = (num) => {
    if (!(/^\d+$/.test(num))) {
      setResult('Please enter a valid number!');
      return;
    }

    if (num < 2) {
      setResult('No, ' + num + ' is not a prime number!');
      return;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        setResult('No, ' + num + ' is not a prime number!');
        return;
      }
    }
    setResult('Yes, ' + num + ' is a prime number!');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    isPrime(number);
    setChecked(true);
  };

  return (
    <>
    <div className='App'>
      <h1>Prime Checker</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a number' onChange={(e) => setNumber(e.target.value)} />
        <button type='submit'>Check Prime</button>
      </form>

      { checked && (
        result ? (
          <h3>{ result }</h3>
        ) : (
          <h3>{ result }</h3>
        )
      )}

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default PrimeChecker