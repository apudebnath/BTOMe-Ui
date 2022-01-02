import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AllProducts = () => {
    return (
        <div className="container py-5 mb-5">
            <div className="row py-3">
                <div className='col-md-6'>
                   <h3 className="text-start">All Products-</h3>
                </div>
                <div className='col-md-6 text-end'>
                   <Link className='text-decoration-none pe-3' to="allcategories">All</Link>
                   <Link className='text-decoration-none pe-3' to="furniture">Furniture</Link>
                   <Link className='text-decoration-none pe-3' to="clocks">Clocks</Link>
                   <Link className='text-decoration-none pe-3' to="lights">Lights</Link>
                   <Link className='text-decoration-none pe-3' to="toys">Toys</Link>
                   <Link className='text-decoration-none pe-0' to="accessories">Accessories</Link>
                </div>
            </div>
            <div className='border'> <Outlet/> </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                
                    <div className="col">
                        <div className="card ">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-accessories-8-1-430x491.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Watch</h5>
                                <p className="card-text text-success fw-bold">$120.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-11-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">bottle</h5>
                                <p className="card-text text-success fw-bold">$130.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/08/product-furniture-14-2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">Table Pen</h5>
                                <p className="card-text text-success fw-bold">$100.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2016/09/product-furniture-4-3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title ">Wood Table</h5>
                                <p className="card-text text-success fw-bold">$110.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;