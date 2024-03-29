import './App.css';
import React from 'react';
import Home from './components/Home'
import Character from './components/Character';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import SavedCharacters from './components/SavedCharacters';
import { Container } from '@mui/material';


function App() {
  return (
    <Container maxWidth="xl" id="raider-io-app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="character" element={<Character />} />
          <Route path="saved_characters" element={<SavedCharacters />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
