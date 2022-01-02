import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';
import MenuBar from './Shared/MenuBar/MenuBar';

function App() {
    return (
        <div className="App">
            <MenuBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
