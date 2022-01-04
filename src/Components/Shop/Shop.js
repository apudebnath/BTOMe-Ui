import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url= 'https://gentle-woodland-78175.herokuapp.com/all-products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-5 pt-5'>
            <div>
                <h2 className=' border-bottom border-dark d-inline'>Shop</h2>
                <h6 className='py-3'>
                    <Link className="text-decoration-none text-black" to='/'> Home</Link>
                    <FontAwesomeIcon className="mx-2" icon={faGreaterThan} size="xs" />
                    <span className="text-secondary"> Shop </span>
                </h6>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 text-start">
                    {
                        products.map(product => <div key={product._id} className="col">
                            <Link to={`/productdetails/${product._id}`} style={{textDecoration: 'none'}}>
                            <div className="card single-product">
                                <div className='product-image'>
                                    <img src={product.productImage} className="card-img-top"  alt="..." />
                                </div>
                                <div className="card-body product-info">
                                    <h5 className="card-title product-title ">{product.productName}</h5>
                                    <p className="card-text text-success fw-bold">$ {product.productMainPrice}</p>
                                </div>
                            </div></Link>
                        </div>)
                    }  
                </div>
            </div>
        </div>
    );
};

export default Shop;