import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SelectionSorter = () => {
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

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
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
      <h1>Selection Sort</h1>

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

export default SelectionSorter