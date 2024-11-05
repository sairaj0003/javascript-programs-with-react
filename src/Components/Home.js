import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const btns = [
    { path: '/array-operations', name: 'Array Operations'},
    { path: '/reverse-a-string', name: 'Reverse a String'},
    { path: '/prime-checker', name: 'Prime Checker'},
    { path: '/palindrome-checker', name: 'Palindrome Checker'},
    { path: '/fibonacci-generator', name: 'Fibonacci Generator'},
    { path: '/factorial-calculation', name: 'Factorial Calculation'},
    { path: '/character-frequency-counter', name: 'Character Frequency Counter'},
    { path: '/counter', name: 'Counter'},
    { path: '/title-case-converter', name: 'Title Case Converter'},
    { path: '/string-sorter', name: 'String Sorter'},
    { path: '/bubble-sort', name: 'Bubble Sort'},
    { path: '/selection-sort', name: 'Selection Sort'},
    { path: '/insertion-sort', name: 'Insertion Sort'},
  ];

  return (
    <div className='App'>
        <h2>JavaScript Programs</h2>
        {btns.map((route, index) => (
            <button key={index} onClick={() => navigate(route.path)} className='btns wide'>
                {route.name}
            </button>
        ))}
    </div>
  )
}

export default Home