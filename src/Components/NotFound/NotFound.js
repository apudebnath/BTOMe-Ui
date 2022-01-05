import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="text-center pt-5 mt-5">
            <div className="bg-404">

                {/* Home Button */}
                <Button as={Link} to="/home" className="btn-404 rounded-pill btn-lg btn-info fw-bold">GO BACK TO EARTH</Button>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;