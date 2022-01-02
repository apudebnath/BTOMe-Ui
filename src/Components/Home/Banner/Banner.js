import React from 'react';

import "./Banner.css"

const Banner = () => {

    return (

        <div className="body container mt-5 ">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex ">
                            <div className="text-center d-flex align-items-center">
                                <div> <h4>CAPPELLINI</h4>
                                    <h2>Wooden Lounge Chairs</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p></div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <img className="d-block w-100 banner-image-size" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-2.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="d-flex ">
                            <div className="text-center d-flex align-items-center">
                                <div> <h4>CAPPELLINI</h4>
                                    <h2>Wooden Lounge Chairs</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p></div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <img className="d-block w-100 banner-image-size" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex ">
                            <div className="text-center d-flex align-items-center">
                                <div> <h4>CAPPELLINI</h4>
                                    <h2>Wooden Lounge Chairs</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p></div>
                            </div>
                            <div style={{ width: "100%" }}>
                                <img className="d-block w-100 banner-image-size" src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2017/01/slider-main-demo-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div >

    );
};

export default Banner;