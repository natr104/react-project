import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SavedCharactersContextProvider } from './contexts/SavedCharactersContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Character from './components/Character';
import Home from './components/Home';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SavedCharactersContextProvider>

      <Router>
        <App />
      </Router>


    </SavedCharactersContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
