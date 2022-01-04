import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Payment.css'

const Payment = () => {
    return (
        <div className="body payment">
            <h1>Payment System Comming soon</h1>
            <Spinner animation="border" variant="success" className="p-5 m-5" />
        </div>
    );
};

export default Payment;