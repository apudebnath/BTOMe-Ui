import React from 'react';
import "./SingleProductBanner.css"
const SingleProductBanner = () => {
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col  d-flex align-items-center justify-content-center "><div className="text-start">
                    <h3 className="fw-normal" >ALL-IN-ONE ECOMMERCE SOLUTION</h3>
                    <h2>B2Me - WooCommerce Theme</h2>
                    <p className="fw-normal">WoodMart WooCommerce theme for WordPress is the only thing <br /> you need to create your perfect online store. <br /> Use it for any kind of website: business, corporate, retail, multivendors.</p>
                    <button className="bg-success text-white fw-normal me-2 border px-3 py-1">READ MORE</button>
                    <button className="bg-white fw-normal me-2 border px-3 py-1">CONTACT US</button>

                </div></div>
                <div className="col"> <img className="w-100" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/furniture5_3-430x490.jpg.webp" alt="" /></div>

            </div>
        </div>
    );
};

export default SingleProductBanner;


