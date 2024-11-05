import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const InsertionSorter = () => {
  const navigate = useNavigate();
  const [inputArray, setInputArray] = useState('');
  const [sortedArray, setSortedArray] = useState(null);
  
  const sortNumbers = () => {
    if (!(/^(-?\d+)((\s)*,(\s)*(-?\d+))*$/).test(inputArray)) {
      setSortedArray('Please enter a valid Array!');
      return;
    }

    const arr = inputArray.split(',').map(Number);

    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
      arr[j + 1] = key;
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
      <h1>Insertion Sort</h1>

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

export default InsertionSorter