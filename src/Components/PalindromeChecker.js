import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PalindromeChecker = () => {
  const navigate = useNavigate();
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    setResult(str === str.split('').reverse().join(''));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    isPalindrome(inputString);
    setChecked(true);
  };

  return (
    <>
    <div className='App'>
      <h1>Palindrome Checker</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter String' onChange={(e) => setInputString(e.target.value)} />
        <button type='submit'>Check Palindrome</button>
      </form>

      { checked && (
        result ? (
          <h3>Yes, it is a palindrome!</h3>
        ) : (
          <h3>No, it is not a palindrome!</h3>
        )
      )}

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default PalindromeChecker