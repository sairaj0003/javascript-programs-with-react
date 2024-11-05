import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CharacterFrequencyCounter = () => {
  const navigate = useNavigate();
  const [inputString, setInputString] = useState();
  const [charFrequency, setCharFrequency] = useState();
  
  const characterFrequencyCounter = (str) => {
    if (/^\s+$/.test(str)) {
      setCharFrequency('Please enter a valid string!');
      return;
    }

    const freq = {};

    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }

    setCharFrequency(freq);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    characterFrequencyCounter(inputString);
  };

  return (
    <>
    <div className='App'>
      <h1>Character Frequency Counter</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a string' required onChange={(e) => setInputString(e.target.value)} />
        <button type='submit'>Count Characters</button>
      </form>

      { 
        typeof charFrequency === "object" && (
            <h3>{ Object.entries(charFrequency).map(([char, freq]) => `'${char}': ${freq}`).join(', ') }</h3>
        )
      }

      { typeof charFrequency === 'string' && <h3>{ charFrequency }</h3> }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default CharacterFrequencyCounter