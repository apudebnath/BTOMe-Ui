import React from 'react';
import { Link } from 'react-router-dom';
import "./SingleProductBanner.css"
const SingleProductBanner = () => {
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col  d-flex align-items-center justify-content-center "><div className="text-start">
                    <h3 className="fw-normal" >ALL-IN-ONE ECOMMERCE SOLUTION</h3>
                    <h2>B2Me - Special Collection</h2>
                    <p className="fw-normal">B2Me is your best trustable and stylish shop <br /> you can buy your perfect online product. <br /> We are always with you.</p>
                    <Link to="/shop">
                        <button className=" readmore-button text-white fw-normal me-2 border px-3 py-1">READ MORE</button>
                    </Link>
                    <Link to="/contact">
                        <button className="contact-button fw-normal me-2 border px-3 py-1">CONTACT US</button>
                    </Link>

                </div></div>
                <div className="col text-center"> 
                    <img className="w-75 " src="https://i.ibb.co/dbK9WkH/bag1.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default SingleProductBanner;


