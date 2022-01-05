import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import Furniture from './Components/Categories/Furniture/Furniture';
import Clocks from './Components/Categories/Clocks/Clocks';
import Lights from './Components/Categories/Lights/Lights';
import Jewelry from './Components/Categories/Jewelry/Jewelry';
import AllCategories from './Components/Categories/AllCategories/AllCategories';
import NotFound from './Components/NotFound/NotFound';
import MenuBar from './Components/Shared/MenuBar/MenuBar';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Orders from './Components/Dashboard/Orders/Orders';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import ManageProduct from './Components/Dashboard/ManageProduct/ManageProduct';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
import ReviewAdding from './Components/Dashboard/ReviewAdding/ReviewAdding';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Login from './Components/Login/Login/Login';
import Registration from './Components/Login/Registration/Registration';
import Payment from './Components/Payment/Payment';
import Blog from './Components/Blog/Blog';
import FirebaseProvider from './context/FirebaseProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AdminPrivateRoute from './PrivateRoute/AdminPrivateRoute';
import SkinCare from './Components/Categories/SkinCare/SkinCare';

function App() {
    return (
        <FirebaseProvider>
            <Router>
            <MenuBar/>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<AllCategories />} />
                    <Route path="furniture" element={<Furniture />} />
                    <Route path="clocks" element={<Clocks />} />
                    <Route path="lights" element={<Lights />} />
                    <Route path="skincare" element={<SkinCare />} />
                    <Route path="jewelry" element={<Jewelry />} />
                </Route>
                <Route path="shop" element={<Shop />} />
                <Route path="blog" element={<Blog />} />
                <Route path="productdetails/:id" element={<ProductDetails />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={< Dashboard />}>
                    <Route path="/dashboard" element={<DashboardHome />}/>
                    <Route path="payment" element={<Payment />} />
                    <Route path="review" element={<ReviewAdding />} />
                    <Route path="orders" element={<Orders />} />
                    <Route path="addProduct" element={<AddProduct />} />
                    <Route path="manageProducts" element={<ManageProduct />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
        </FirebaseProvider>
    );
}

export default App;
