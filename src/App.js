import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import Furniture from './Components/Categories/Furniture/Furniture';
import Clocks from './Components/Categories/Clocks/Clocks';
import Lights from './Components/Categories/Lights/Lights';
import Toys from './Components/Categories/Toys/Toys';
import Accessories from './Components/Categories/Accessories/Accessories';
import AllCategories from './Components/Categories/AllCategories/AllCategories';
import NotFound from './Components/NotFound/NotFound';
import MenuBar from './Components/Shared/MenuBar/MenuBar';

function App() {
    return (
        <div className="App">
            <MenuBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="allcategories" element={<AllCategories />} />
                <Route path="shop" element={<Shop />} />
                <Route path="furniture" element={<Furniture />} />
                <Route path="clocks" element={<Clocks />} />
                <Route path="lights" element={<Lights />} />
                <Route path="toys" element={<Toys />} />
                <Route path="accessories" element={<Accessories />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
