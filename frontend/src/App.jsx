import React from 'react';
import { About, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </>
  )
}

export default App