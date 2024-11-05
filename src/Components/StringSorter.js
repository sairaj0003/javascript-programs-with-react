import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const StringSorter = () => {
  const navigate = useNavigate();
  const [inputString, setInputString] = useState('');
  const [sortedString, setSortedString] = useState('');
  
  const sortString = (str) => {
    if (!(/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/.test(str))) {
      setSortedString('Please enter a valid string!');
      return;
    }

    setSortedString(str.split('').sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).join(''));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sortString(inputString);
  };

  return (
    <>
    <div className='App'>
      <h1>Sort a String Alphabetically</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a string' onChange={(e) => setInputString(e.target.value)} />
        <button type='submit'>Sort String</button>
      </form>

      { 
        sortedString && (
          <h3>{ sortedString }</h3>
        )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default StringSorter