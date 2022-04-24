import './App.css';
import React from 'react';
import Home from './components/Home'
import Character from './components/Character';
import { Routes, Route, Link, Outlet} from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character" element={<Character />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
