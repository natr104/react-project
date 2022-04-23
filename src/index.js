import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home';
import Character from './components/Character';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { SavedCharactersContextProvider } from './contexts/SavedCharactersContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SavedCharactersContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="character" element={<Character />} />
          </Route>
        </Routes>
      </Router>
    </SavedCharactersContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
