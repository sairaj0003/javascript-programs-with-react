import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ArrayOperations = () => {
  const navigate = useNavigate();
  const [inputArray, setInputArray] = useState(null);
  const [arraySum, setArraySum] = useState(null);
  const [largestNumber, setLargestNumber] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const validateInput = () => {
    if (!(/^(-?\d+)((\s)*,(\s)*(-?\d+))*$/).test(inputArray)) {
      setErrorMsg('Please enter valid numbers!');
      setArraySum(null);
      setLargestNumber(null);
      return false;
    }
    return true;
  }

  const calSum = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    setArraySum(null);
    setLargestNumber(null);
    setErrorMsg(null);

    const numbers = inputArray.split(',').map(Number);

    setArraySum(numbers.reduce((sum, num) => sum + num, 0));
  }

  const findMax = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    setArraySum(null);
    setLargestNumber(null);
    setErrorMsg(null);

    const numbers = inputArray.split(',').map(Number);

    setLargestNumber(Math.max(...numbers));
  }

  return (
    <>
    <div className='App'>
      <h1>Array Operations</h1>

      <form>
        <input type='text' placeholder='Enter an array of numbers (e.g., 1,2,3,4,5)' onChange={(e) => setInputArray(e.target.value)} />
        <div>
        <button onClick={calSum}>Calculate Sum</button>
        <button onClick={findMax}>Find Largest Number</button>
        </div>
      </form>

      { 
        errorMsg && (
            <h3>{ errorMsg }</h3>
        )
      }

      { 
        (arraySum || arraySum===0) && (
            <h3>Sum: { arraySum }</h3>
        )
      }

      { 
        (largestNumber || largestNumber===0) && (
            <h3>Largest Number: { largestNumber }</h3>
        )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default ArrayOperations