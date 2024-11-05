import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ReverseString = () => {
  const navigate = useNavigate();
  const [string, setString] = useState('');
  const [reverseString, setReverseString] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setReverseString(string.split('').reverse().join(''));
  };

  return (
    <>
    <div className='App'>
      <h1>Reverse a String</h1>
      
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter String' required onChange={(e) => setString(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>

      {reverseString && (<h3>Reverse is '{reverseString}'</h3>)}

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default ReverseString