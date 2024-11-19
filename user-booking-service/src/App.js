// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingSearchBar from './landingPage/searchBar';

function App() {
  return (
    <Router>
      <div>
        <Routes>
      
          <Route path="/" element={<LandingSearchBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
