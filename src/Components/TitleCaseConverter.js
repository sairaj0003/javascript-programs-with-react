import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const TitleCaseConverter = () => {
  const navigate = useNavigate();
  const [inputString, setInputString] = useState('');
  const [titleCaseString, setTitleCaseString] = useState('');
  
  const toTitleCase = (str) => {
    if (!(/^[a-zA-Z]+(\s+[a-zA-Z]+)*$/.test(str))) {
      setTitleCaseString('Please enter a valid string!');
      return;
    }

    const words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    setTitleCaseString(words.join(" "));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    toTitleCase(inputString);
  };

  return (
    <>
    <div className='App'>
      <h1>String to Title Case</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a string' onChange={(e) => setInputString(e.target.value)} />
        <button type='submit'>Convert to Title Case</button>
      </form>

      { 
        titleCaseString && (
          <h3>{ titleCaseString }</h3>
        )
      }

      <button onClick={() => navigate('/')} className='btns'>Back</button>

    </div>
    </>
  )
}

export default TitleCaseConverter