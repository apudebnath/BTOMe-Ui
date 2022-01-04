import React from 'react';
import { Carousel } from 'react-bootstrap';

const SocialMedia = () => {
    return (
        <div className=" mb-5 pt-3 pb-5">
            <div className="text-center pt-5">
                <h3 className="">- Join us on Instagram -</h3>
                <p className="pb-3">We Keep your love and share with you. <br /> Try to move with us.</p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-1 text-start">
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/G3tFmZV/blogi4.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/TcZbLmK/blogi5.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/J5HL5Sh/blogi6.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/yRfcQSK/blogi7.jpg" className="card-img-top" alt="..." />
                            </div>
                        </div>
                    </div>
                    
                    {/*<div className="col">
                     <Carousel>
                        <Carousel.Item className='w-25'>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/pyfxtwG/blogi1.jpg"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='w-25'>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/pyfxtwG/blogi1.jpg"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='w-25'>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/pyfxtwG/blogi1.jpg"
                            alt="First slide"
                          />
                          <Carousel.Caption>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel> 
                    </div>*/} 
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;