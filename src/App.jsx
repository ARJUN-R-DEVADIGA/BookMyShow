import React from 'react';
import Navbar from './components/Navbar';
import Contentbody from './components/Contentbody';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="nav">
        <Navbar />
      </div>
      <div className="body">
        <Routes>
          <Route path="/" element={<Contentbody />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
