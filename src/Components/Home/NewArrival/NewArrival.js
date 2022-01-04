import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NewArrival = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url= 'https://gentle-woodland-78175.herokuapp.com/all-products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="pb-5">
            <div className="text-center mt-5 pt-5">
                <h3 className="pt-5">-New Arrival-</h3>
                <p className="pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Architecto fugit error hic ipsa id</p>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                {
                    products.slice(0,4).map(product => <div key={product._id} className="col">
                        <Link to={`/productdetails/${product._id}`} style={{textDecoration: 'none'}}>
                        <div className="card single-product">
                            <div className='product-image'>
                                <img src={product.productImage} className="card-img-top"  alt="..." />
                            </div>
                            <div className="card-body product-info">
                                <h5 className="card-title product-title ">{product.productName}</h5>
                                <p className="card-text text-success fw-bold">$ {product.productMainPrice}</p>
                            </div>
                        </div>
                        </Link>
                    </div>)
                }  
                </div>
            </div>
        </div>
    );
};

export default NewArrival;