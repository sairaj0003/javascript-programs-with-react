import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import ArrayOperations from './Components/ArrayOperations';
import BubbleSorter from './Components/BubbleSorter';
import CalculateFactorial from './Components/CalculateFactorial';
import CharacterFrequencyCounter from './Components/CharacterFrequencyCounter';
import Counter from './Components/Counter';
import FibonacciGenerator from './Components/FibonacciGenerator';
import InsertionSorter from './Components/InsertionSorter';
import PalindromeChecker from './Components/PalindromeChecker';
import PrimeChecker from './Components/PrimeChecker';
import ReverseString from './Components/ReverseString';
import SelectionSorter from './Components/SelectionSorter';
import StringSorter from './Components/StringSorter';
import TitleCaseConverter from './Components/TitleCaseConverter';

import './CSS/styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/array-operations' element={<ArrayOperations />} />
        <Route path='/bubble-sort' element={<BubbleSorter />} />
        <Route path='/factorial-calculation' element={<CalculateFactorial />} />
        <Route path='/character-frequency-counter' element={<CharacterFrequencyCounter />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/fibonacci-generator' element={<FibonacciGenerator />} />
        <Route path='/insertion-sort' element={<InsertionSorter />} />
        <Route path='/palindrome-checker' element={<PalindromeChecker />} />
        <Route path='/prime-checker' element={<PrimeChecker />} />
        <Route path='/reverse-a-string' element={<ReverseString />} />
        <Route path='/selection-sort' element={<SelectionSorter />} />
        <Route path='/string-sorter' element={<StringSorter />} />
        <Route path='/title-case-converter' element={<TitleCaseConverter />} />
      </Routes>
    </Router>
  )
}

export default App