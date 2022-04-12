import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Character from './components/Character'

function App() {
  return (
    <div>
      <h1>test</h1>

      <Routes>
        <Route path="/" element={<Home />} />    
        <Route path="/character" element={<Character /> } />
      </Routes>
    </div>
  );
}

export default App;
