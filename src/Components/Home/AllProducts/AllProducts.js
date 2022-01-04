import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url= 'https://gentle-woodland-78175.herokuapp.com/all-products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="container py-5 mb-5">
            <div className="row py-3">
                <div className='col-md-6'>
                   <h3 className="text-start">All Products-</h3>
                </div>
                <div className='col-md-6 text-end'>
                   <Link className='text-decoration-none pe-3' to="/">All</Link>
                   <Link className='text-decoration-none pe-3' to="furniture">Furniture</Link>
                   <Link className='text-decoration-none pe-3' to="clocks">Clocks</Link>
                   <Link className='text-decoration-none pe-3' to="lights">Lights</Link>
                   <Link className='text-decoration-none pe-3' to="toys">Toys</Link>
                   <Link className='text-decoration-none pe-0' to="accessories">Accessories</Link>
                </div>
            </div>
            <div className='border'> 
                <Outlet>
                    <div className="container">
                        <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                            {
                                products.slice(0,8).map(product => <div key={product._id} className="col">
                                    <div className="card">
                                        <img src={product.productImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title ">bottle</h5>
                                            <p className="card-text text-success fw-bold">$130.00</p>
                                        </div>
                                    </div>
                                </div>)
                            }  
                        </div>
                    </div>
                </Outlet>
            </div>
            
        </div>
    );
};

export default AllProducts;