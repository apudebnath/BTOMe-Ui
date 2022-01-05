import React from 'react';
import "./Banner.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    return (


        <div className="body container mt-5 ">
            <Slider {...settings}>
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col d-flex align-items-center">
                        <div className='text-center'> 
                            <h4>CAPPELLINI</h4>
                            <h2>Wooden Lounge Chairs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='w-75'>
                            <img src="https://i.ibb.co/HD8rgCm/banner1.png" className="card-img-top w"  alt="..." />
                        </div>
                    </div> 
                </div>
            </div>  
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col d-flex align-items-center">
                        <div className='text-center'> 
                            <h4>CAPPELLINI</h4>
                            <h2>Wooden Lounge Chairs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='w-75'>
                            <img src="https://i.ibb.co/7r4rxfM/banner2.png" className="card-img-top w"  alt="..." />
                        </div>
                    </div> 
                </div>
            </div>  
            <div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col d-flex align-items-center">
                        <div className='text-center'> 
                            <h4>CAPPELLINI</h4>
                            <h2>Wooden Lounge Chairs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt placeat </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='w-75'>
                            <img src="https://i.ibb.co/19tY8HK/banner3.png" className="card-img-top"  alt="..." />
                        </div>
                    </div> 
                </div>
            </div>  
        </Slider>
            {/* <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
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
            </div> */}

        </div >

    );
    
};

export default Banner;