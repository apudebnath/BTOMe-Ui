import React from 'react';
import './LatestNews.css';
const LatestNews = () => {
    return (
        <div className="pb-5 mb-5">
            <div className="text-center pt-5">
                <h3 className="">- Our Latest News -</h3>
                <p className="pb-3">We Keep out collection up to date and share with you. <br /> Try to move with us.</p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4 text-start">
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/pyfxtwG/blogi1.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className='text-center' style={{marginTop: '-25px', zIndex: '999'}}>
                                    <h6 className='bg-info text-center text-white px-5 py-2 d-inline-block'>INSPIRATION, NEWS</h6>
                                </div>
                                <h5 className="card-title fs-4 ">Collection inspiration and trends</h5>
                                <span>Presented by- </span>
                                <span> R.Stuard</span>
                                <p className="card-text pstyle">Product Collections are product bundles which contain an assortment of several sets that usually belong to a common theme....</p>
                                <p className='m-0 fw-bold'>Read More...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/Qvk7mWD/blogi2.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className='text-center' style={{marginTop: '-25px', zIndex: '999'}}>
                                    <h6 className='bg-info text-center text-white px-5 py-2 d-inline-block'>INSPIRATION, TRENDS</h6>
                                </div>
                                <h5 className="card-title fs-4 ">Inspirational thinking and trends</h5>
                                <span>Presented by- </span>
                                <span> T.Rimni</span>
                                <p className="card-text pstyle">Product Collections are product bundles which contain an assortment of several sets that usually belong to a common theme....</p>
                                <p className='m-0 fw-bold'>Read More...</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow border-0">
                            <div className="style">
                                <img src="https://i.ibb.co/t3TLjgQ/blogi3.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <div className='text-center' style={{marginTop: '-25px', zIndex: '999'}}>
                                    <h6 className='bg-info text-center text-white px-5 py-2 d-inline-block'>INSPIRATION, FASSION</h6>
                                </div>
                                <h5 className="card-title fs-4 ">Creative thinking and presentation</h5>
                                <span>Presented by- </span>
                                <span>S.Martin</span>
                                <p className="card-text pstyle">Product Collections are product bundles which contain an assortment of several sets that usually belong to a common theme....</p>
                                <p className='m-0 fw-bold'>Read More...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;