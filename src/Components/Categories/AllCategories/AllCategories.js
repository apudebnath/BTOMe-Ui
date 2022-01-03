import React, { useEffect, useState } from 'react';
import './AllCategories.css';

const AllCategories = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url= 'https://gentle-woodland-78175.herokuapp.com/all-products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='py-3'>
            <h2>AllCategories</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                    {
                        products.slice(0,8).map(product => <div key={product._id} className="col">
                            <div className="card single-product">
                                <div className='product-image'>
                                    <img src={product.productImage} className="card-img-top"  alt="..." />
                                </div>
                                <div className="card-body product-info">
                                    <h5 className="card-title product-title ">{product.productName}</h5>
                                    <p className="card-text text-success fw-bold">$ {product.productMainPrice}</p>
                                </div>
                            </div>
                        </div>)
                    }  
                </div>
            </div>
        </div>
    );
};

export default AllCategories;