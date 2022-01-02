import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
