import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './Components/Shop/Shop';
import Furniture from './Components/Categories/Furniture/Furniture';
import Clocks from './Components/Categories/Clocks/Clocks';
import Lights from './Components/Categories/Lights/Lights';
import Toys from './Components/Categories/Toys/Toys';
import Accessories from './Components/Categories/Accessories/Accessories';
import AllCategories from './Components/Categories/AllCategories/AllCategories';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="allcategories" element={<AllCategories />} />
                    <Route path="furniture" element={<Furniture />} />
                    <Route path="clocks" element={<Clocks />} />
                    <Route path="lights" element={<Lights />} />
                    <Route path="toys" element={<Toys />} />
                    <Route path="accessories" element={<Accessories />} />
                </Route>

                <Route path="shop" element={<Shop />} >
                </Route>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
