import React from 'react';
import { Button, Form, } from 'react-bootstrap';
import image from '../../../images/reg1.jpg';

const Registration = () => {
    return (
            <div className='container py-5
            '>
                <h2>Registration</h2>
                <div className='row py-4'>
                    <div className='col-md-6 col-12 text-center flex'>
                        <Form className='p-5'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                              <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                              <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
                              <Form.Check
                               label="Already Register? Login"></Form.Check>
                            </Form.Group>
                            <Button className='px-5' variant="primary" type="submit">
                              Register
                            </Button>
                            <br /><br />
                            <Button className='px-5' variant="primary" type="submit">
                              SignIn with Google
                            </Button>
                        </Form>
                    </div>
                    <div className='col-md-6 col-12'>
                        <img className='w-100 h-100' style={{objectFit: 'cover'}} src={image} alt="" />
                    </div>
                </div>
            </div>
    );
};

export default Registration;