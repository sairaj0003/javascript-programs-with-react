import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BubbleSorter = () => {
  const navigate = useNavigate();
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState(null);
  
  const sortNumbers = () => {
    if (!(/^(-?\d+)((\s)*,(\s)*(-?\d+))*$/).test(inputArray)) {
      setSortedArray('Please enter a valid Array!');
      return;
    }

    const arr = inputArray.split(',').map(Number);

    const n = arr.length;
    let swapped;

    for (let i = 0; i < n; i++) {
      swapped = false;

      for (let j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    setSortedArray(arr.join(', '));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sortNumbers();
  };

  return (
    <>
    <div className='App'>
      <h1>Bubble Sort</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter an array of numbers (e.g., 1,2,3,4,5)' onChange={(e) => setInputArray(e.target.value)} />
        <button type='submit'>Sort Numbers</button>
      </form>

      { 
        sortedArray && (
          <h3>{ sortedArray }</h3>
        )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default BubbleSorter