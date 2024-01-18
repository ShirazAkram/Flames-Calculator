import React from 'react';
import "../styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ResultPage from './ResultPage';

function App() {
  return (
    <Router>
      <div className='header-div'>
        <h1>FLAMES Relationship Calculator</h1>
      </div>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
