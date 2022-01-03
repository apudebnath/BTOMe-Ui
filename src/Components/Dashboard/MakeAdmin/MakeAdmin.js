import React, { useState } from 'react';
import { Alert, Button, Form, Row, Col } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://gentle-woodland-78175.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }

    return (
        <div className="">
            <h2 className="">Make an Admin</h2>

            <Row xs={1} sm={2} md={2}>
                <Col>
                    <img src="https://i.ibb.co/M9WZpbJ/image.png" alt="" />
                </Col>
                <Col>
                    <Form onSubmit={handleAdminSubmit} className="bg-light rounded-3 py-5 mt-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="fw-bold">Email address</Form.Label>
                            <Form.Control
                                type="email"
                                className="w-50 mx-auto"
                                onBlur={handleOnBlur}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        {success && <Alert variant={'success'}>successfully Made an Admin !</Alert>}
                        <Button type="submit" variant="light" className="btn-outline-primary">Make Admin</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default MakeAdmin;