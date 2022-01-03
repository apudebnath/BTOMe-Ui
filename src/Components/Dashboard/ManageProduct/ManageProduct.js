import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://gentle-woodland-78175.herokuapp.com/all-products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDelete = id => {
        axios.delete(`https://gentle-woodland-78175.herokuapp.com/delete-single-product/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    alert('Are you sure to delete this Product?');
                    console.log(res.data.deletedCount);
                    console.log(res.data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
            })
    }

    return (
        // Product Managing
        <div className="manage-products">
            <h2 className="py-5">Manage Products</h2>
            {
                products.map(product => <div key={product._id}>
                    <Row className="m-2 bg-secondary rounded-pill w-75 mx-auto p-3 text-white">
                        <Col className='my-auto'>
                            <img className='w-25 rounded-pill' src={product.productImage} alt="" />
                        </Col>
                        <Col className='my-auto'>
                            <h5 className="text-start"> {product.productName} </h5>
                        </Col>
                        <Col className='my-auto'>
                            <Button variant="outline-danger" className="btn-dark" onClick={() => { handleDelete(product._id) }}>Delete</Button>
                        </Col>
                    </Row>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;